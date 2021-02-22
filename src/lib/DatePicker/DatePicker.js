import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
    inputWidthOptions,
    buttonSizeOptions,
    formStatusDefault,
    formStatusOptions,
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
    // Note: default locale of moment is 'en', overwrite it with custom config 'pg-fr'
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

    // ...and extract input state handling
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        if (selectedDate) {
            setInputValue(selectedDate.format(dateFormat));
        }
    }, [selectedDate]);

    // To set date value via Input change
    const setInputDate = value => {
        setSelectedDate(moment(value, dateFormat));
        onChange(value);
    };

    // Handle value change via Input and prevent final selectedDate to be applied if incorrect (in format or in value compared to minimumDate and maximumDate)
    const handleInputOnChange = e => {
        if (selectedDate) {
            setSelectedDate(null);
        }

        setInputValue(e.target.value);

        if (e.target.value.indexOf('_') >= 0) {
            // we don't do anything if date is not complete and input mask contains '_' characters
            return;
        } else if (e.target.value === '' && !resetDate) {
            // we don't reset input if input is empty and there is no resetDate
            setSelectedDate(null);
        } else if (!moment(e.target.value, dateFormat, true).isValid()) {
            if (resetDate && moment(resetDate, dateFormat, true).isValid()) {
                // if invalid date and valid resetDate, we use it
                setInputDate(resetDate);
            } else {
                // if invalid date and there isn't valid resetDate, we empty field
                setSelectedDate(null);
                setInputValue('');
            }
        } else {
            // at this step, date is complete and valid, so we check min and max dates

            // if there is valid minimum date, we check if user date is after it
            let isAfterMinimumDate = true;

            if (
                minimumDate &&
                moment(minimumDate, dateFormat, true).isValid()
            ) {
                isAfterMinimumDate = moment(e.target.value, dateFormat).isAfter(
                    moment(minimumDate, dateFormat),
                );
            }

            // if there is valid maximum date, we check if user date is before it
            let isBeforeMaximumDate = true;

            if (
                maximumDate &&
                moment(maximumDate, dateFormat, true).isValid()
            ) {
                isBeforeMaximumDate = moment(
                    e.target.value,
                    dateFormat,
                ).isBefore(moment(maximumDate, dateFormat));
            }

            // we set input on valid date
            if (!isAfterMinimumDate) {
                // not okay: user date is before min date, so we fix it
                setInputDate(minimumDate);
            } else if (!isBeforeMaximumDate) {
                // not okay: user date is after max date, so we fix it
                setInputDate(maximumDate);
            } else {
                // all is good, we set input on user date!
                setInputDate(e.target.value);
            }
        }
    };

    // Handle value change via CalendarCell Buttons
    const handleButtonOnChange = e => {
        onChange(moment(e).format(dateFormat));
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
    resetDate: null,
    colorStatus: formStatusDefault,
};

export default DatePicker;
