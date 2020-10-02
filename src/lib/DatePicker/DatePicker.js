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
    value,
    locale,
    minimumDate,
    maximumDate,
    colorStatus,
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
    });

    const handleOnChange = e => {
        if (selectedDate) {
            setSelectedDate(null);
        }
        setInputValue(e.target.value);

        if (moment(e.target.value, dateFormat, true).isValid()) {
            setSelectedDate(moment(e.target.value, dateFormat));
        }
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
        <DateContextProvider value={[selectedDate, setSelectedDate]}>
            <DatePickerBase>
                <DropDown>
                    <DaInput
                        {...rest}
                        mask="99/99/9999"
                        type="text"
                        value={inputValue}
                        onChange={handleOnChange}
                    />

                    {rest.readOnly || rest.disabled ? null : (
                        <Popin>
                            <Calendar
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

    // Input props
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    hasHelpButton: PropTypes.bool,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),

    // Calendar props
    locale: PropTypes.oneOf(Object.values(localeOptions)), // 2-letters short language code
    minimumDate: PropTypes.string,
    maximumDate: PropTypes.string,
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
    colorStatus: formStatusDefault,
};

export default DatePicker;
