import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    inputWidthOptions,
    buttonSizeOptions,
    formStatusDefault,
    formStatusOptions,
    localeOptions,
    localeDefault,
} from '../../shared/constants';
import Dropdown from '../Dropdown/Dropdown';
import DaInput from '../DaInput/DaInput';
import Popin from '../Popin/Popin';
import Calendar from './Calendar/Calendar';
import { DateContextProvider } from './context/DateContext';
import dayjs from './dayjsHelper';
import config from './dayLocaleConfig';
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
    // Update dayjs locale globally
    const pgLocale = locale || localeDefault;

    dayjs.locale(pgLocale, config[pgLocale]);
    const dateFormat = config[pgLocale].formats.L;

    // Save default value of input...
    const [selectedDate, setSelectedDate] = useState(
        dayjs(value, dateFormat, true).isValid()
            ? dayjs(value, dateFormat)
            : null,
    );

    // ...and extract input state handling
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        if (selectedDate) {
            setInputValue(dayjs(selectedDate).format(dateFormat));
        }
    }, [selectedDate]);

    // To set date value via Input change
    const setInputDate = value => {
        setSelectedDate(dayjs(value, dateFormat));
        onChange(value);
    };

    /**
     * @description method to reset invalid date depending on resetDate
     */
    const resetInvalidDate = () => {
        if (resetDate && dayjs(resetDate, dateFormat, true).isValid()) {
            // if invalid date and valid resetDate, we use it
            setInputDate(resetDate);
        } else {
            // if invalid date and there isn't valid resetDate, we empty field
            setSelectedDate(null);
            setInputValue('');
        }
    };

    /**
     * @description method to use when date value passed or typed is complete and valid, so we check min and max dates before updating final value
     * @param {string} value
     */
    const checkMinMaxDates = value => {
        // if there is valid minimum date, we check if user date is after it
        let isAfterMinimumDate = true;

        if (minimumDate && dayjs(minimumDate, dateFormat, true).isValid()) {
            isAfterMinimumDate = dayjs(value, dateFormat).isAfter(
                dayjs(minimumDate, dateFormat),
            );
        }

        // if there is valid maximum date, we check if user date is before it
        let isBeforeMaximumDate = true;

        if (maximumDate && dayjs(maximumDate, dateFormat, true).isValid()) {
            isBeforeMaximumDate = dayjs(value, dateFormat).isBefore(
                dayjs(maximumDate, dateFormat),
            );
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
            setInputDate(value);
        }
    };

    /**
     * @description method to use when date value passed or typed to verify its validity and check with minimum and maximum dates
     * @param {string} value
     */
    const verifyAndChangeDateValue = value => {
        if (!value) {
            setSelectedDate(null);
            setInputValue('');
        } else if (!dayjs(value, dateFormat, true).isValid()) {
            resetInvalidDate();
        } else {
            checkMinMaxDates(value);
        }
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
        } else {
            verifyAndChangeDateValue(e.target.value);
        }
    };

    // To update value dynamically if value is changed externally
    useEffect(() => {
        verifyAndChangeDateValue(value);
    }, [value]);

    // Handle value change via CalendarCell Buttons
    const handleButtonOnChange = e => {
        onChange(dayjs(e).format(dateFormat));
    };

    const calcMonthIndex = () => {
        if (!selectedDate || selectedDate === dayjs().startOf('d')) {
            return dayjs().month();
        }

        const yearDiff =
            dayjs(selectedDate).format('YYYY') - dayjs().format('YYYY');
        const monthDiff = dayjs(selectedDate).format('M') - dayjs().format('M');

        return yearDiff !== 0
            ? dayjs().month() + yearDiff * 12 + monthDiff
            : dayjs().month() + monthDiff;
    };

    return (
        <DateContextProvider
            value={[selectedDate, setSelectedDate, setInputValue]}
        >
            <DatePickerBase theme={rest.theme}>
                <Dropdown theme={rest.theme} hasOverlay={false}>
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
                                    dayjs(
                                        minimumDate,
                                        dateFormat,
                                        true,
                                    ).isValid()
                                        ? dayjs(minimumDate, dateFormat)
                                        : null
                                }
                                maximumDate={
                                    dayjs(
                                        maximumDate,
                                        dateFormat,
                                        true,
                                    ).isValid()
                                        ? dayjs(maximumDate, dateFormat)
                                        : null
                                }
                                colorStatus={colorStatus}
                                handleOnChange={handleButtonOnChange}
                            />
                        </Popin>
                    )}
                </Dropdown>
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
    icon: PropTypes.element,
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
