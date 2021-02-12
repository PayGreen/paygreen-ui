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

    // To set date value via Input change
    const setInputDate = value => {
        setSelectedDate(moment(value, dateFormat));
        onChange(value);
    };

    /**
     * @description - to create condition to validate or invalidate date value
     * @param {string} dateValue - date received, format DD/MM/YYYY
     * @param {string} dateReference - date reference to decide if dateValue is correct minimumDate | maximumDate, format DD/MM/YYYY
     * @param {string} position - to determinate which method from Moment to use based on date's position 'isBefore' | 'isAfter'
     * @returns {boolean}
     */
    const isValidDate = (dateValue, dateReference, position) => {
        return (
            moment(dateValue, dateFormat, true).isValid() &&
            dateReference &&
            moment(dateReference, dateFormat, true).isValid() &&
            (position === 'isBefore'
                ? moment(dateValue, dateFormat).isBefore(
                      moment(dateReference, dateFormat),
                  )
                : moment(dateValue, dateFormat).isAfter(
                      moment(dateReference, dateFormat),
                  ))
        );
    };

    /**
     * @description - to reset wrong date value via Input based on minimumDate, maximumDate and resetDate provided
     * @param {string} dateValue - date received, format DD/MM/YYYY
     */
    const resetWrongDate = dateValue => {
        if (isValidDate(dateValue, maximumDate, 'isAfter')) {
            setInputDate(maximumDate);
        } else if (isValidDate(dateValue, minimumDate, 'isBefore')) {
            setInputDate(minimumDate);
        } else {
            const defaultDate =
                resetDate && moment(resetDate, dateFormat, true).isValid()
                    ? resetDate
                    : moment().format(dateFormat);
            setInputDate(defaultDate);
        }
    };

    // Handle value change via Input and prevent final selectedDate to be applied if incorrect (in format or in value compared to minimumDate and maximumDate)
    const handleInputOnChange = e => {
        if (selectedDate) {
            setSelectedDate(null);
        }

        setInputValue(e.target.value);

        if (
            isValidDate(e.target.value, maximumDate, 'isBefore') &&
            isValidDate(e.target.value, minimumDate, 'isAfter')
        ) {
            setInputDate(e.target.value);
        } else if (
            !minimumDate &&
            isValidDate(e.target.value, maximumDate, 'isBefore')
        ) {
            setInputDate(e.target.value);
        } else if (
            !maximumDate &&
            isValidDate(e.target.value, minimumDate, 'isAfter')
        ) {
            setInputDate(e.target.value);
        } else if (
            !minimumDate &&
            !maximumDate &&
            moment(e.target.value, dateFormat, true).isValid()
        ) {
            setInputDate(e.target.value);
        } else if (e.target.value.indexOf('_') >= 0) {
            // we don't do anything if date is not complete and input mask contains '_' characters
            return;
        } else {
            resetWrongDate(e.target.value);
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
    resetDate: '',
    colorStatus: formStatusDefault,
};

export default DatePicker;
