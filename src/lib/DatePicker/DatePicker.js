import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
    inputWidthOptions,
    buttonSizeOptions,
    formStatusDefault,
    formStatusOptions,
    radiusOptions,
    localeOptions,
    localeDefault,
} from '../../shared/constants';
import DropDown from '../Dropdown/Dropdown';
import DaInput from '../DaInput/DaInput';
import Popin from '../Popin/Popin';
import { DateContextProvider } from './context/DateContext';
import Calendar from './Calendar/Calendar';
import localeConfig from './localeConfig';
import { DatePickerBase } from './style';

const DatePicker = ({
    colorStatus,
    locale,
    minimumDate,
    maximumDate,
    resetDate,
    value,
    onChange,
    ...rest
}) => {
    // Update moment locale globally
    // Note : Default locale of moment is 'en', overwrite it with custom config 'pg-fr'
    const pgLocale = localeConfig['pg-' + localeOptions[locale]]
        ? 'pg-' + localeOptions[locale]
        : 'pg-' + localeDefault;
    const dateFormat = localeConfig[pgLocale].longDateFormat.L;
    moment.updateLocale(pgLocale, localeConfig[pgLocale]);

    // Save default value of input...
    const [selectedDate, setSelectedDate] = useState(
        moment(value, dateFormat, true).isValid()
            ? moment(value, dateFormat)
            : null,
    );

    // And extract input state handling
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        if (selectedDate) {
            setInputValue(selectedDate.format(dateFormat));
        }
    }, [selectedDate]);

    // Handle value change via input
    const handleInputOnChange = e => {
        if (selectedDate) {
            setSelectedDate(null);
        }

        onChange(e.target.value);
        setInputValue(e.target.value);

        if (moment(e.target.value, dateFormat, true).isValid()) {
            setSelectedDate(moment(e.target.value, dateFormat));
        }
    };

    // Handle value change via CalendarCell Buttons
    const handleButtonOnChange = e => {
        onChange(moment(e).format(dateFormat));
    };

    // Reset wrong date value change via input when clicking outside calendar
    const resetWrongDate = value => {
        if (value && moment(value, dateFormat).isValid() === false) {
            const defaultDate =
                resetDate && moment(resetDate, dateFormat, true).isValid()
                    ? resetDate
                    : moment().format(dateFormat);
            setSelectedDate(moment(defaultDate, dateFormat));
        } else if (
            moment(maximumDate, dateFormat, true).isValid() &&
            moment(value, dateFormat).isAfter(moment(maximumDate, dateFormat))
        ) {
            setSelectedDate(moment(maximumDate, dateFormat));
        } else if (
            moment(minimumDate, dateFormat, true).isValid() &&
            moment(value, dateFormat).isBefore(moment(minimumDate, dateFormat))
        ) {
            setSelectedDate(moment(minimumDate, dateFormat));
        }
        setActive(false);
    };

    const calcMonthIndex = () => {
        if (!selectedDate || selectedDate === moment().startOf('d')) {
            return moment().month();
        }

        const yearDiff = selectedDate.format('YYYY') - moment().format('YYYY');
        const monthDiff = selectedDate.format('M') - moment().format('M');

        return yearDiff !== 0
            ? moment().month() + yearDiff * 12 + monthDiff
            : moment().month() + monthDiff;
    };

    return (
        <DateContextProvider
            value={[selectedDate, setSelectedDate, setInputValue]}
        >
            <DatePickerBase theme={rest.theme}>
                <DropDown theme={rest.theme}>
                    <DaInput
                        {...rest}
                        mask="99/99/9999"
                        type="text"
                        value={inputValue}
                        onChange={handleInputOnChange}
                        onInput={() => setActive(true)}
                    />

                    {rest.readOnly || rest.disabled ? null : (
                        <Popin theme={rest.theme}>
                            <Calendar
                                theme={rest.theme}
                                currentMonth={calcMonthIndex()}
                                minimumDate={
                                    moment(
                                        minimumDate,
                                        dateFormat,
                                        true,
                                    ).isValid()
                                        ? moment(minimumDate, dateFormat)
                                        : null
                                }
                                maximumDate={
                                    moment(
                                        maximumDate,
                                        dateFormat,
                                        true,
                                    ).isValid()
                                        ? moment(maximumDate, dateFormat)
                                        : null
                                }
                                colorStatus={colorStatus}
                                handleOnChange={handleButtonOnChange}
                            />
                        </Popin>
                    )}
                </DropDown>
            </DatePickerBase>
        </DateContextProvider>
    );
};

DatePicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,

    // Input props
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    isRounded: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasHelpButton: PropTypes.bool,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),

    // Calendar props
    locale: PropTypes.oneOf(Object.values(localeOptions)), // 2-letters short language code
    minimumDate: PropTypes.string,
    maximumDate: PropTypes.string,
    resetDate: PropTypes.string,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

DatePicker.defaultProps = {
    value: '',

    // Input props
    disabled: false,
    readOnly: false,

    // Calendar props
    locale: localeDefault,
    minimumDate: null,
    maximumDate: null,
    resetDate: '',
    colorStatus: formStatusDefault,
};

export default DatePicker;
