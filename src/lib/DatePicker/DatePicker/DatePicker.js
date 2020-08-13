import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateContextProvider } from '../context/DateContext';
import DropDown from '../../Dropdown/Dropdown';
import DaInput from '../../DaInput/DaInput';
import Popin from '../../Popin/Popin';
import Calendar from '../Calendar/Calendar';
import {
    buttonSizeDefault,
    buttonSizeOptions,
    formStatusDefault,
    formStatusOptions,
} from '../../../shared/constants';

const dateFormat = {
    fr: 'DD/MM/YYYY',
    en: 'MM/DD/YYYY',
};

const DatePicker = ({
    value,
    locale,
    minimumDate,
    maximumDate,
    colorStatus,
    ...rest
}) => {
    const [selectedDate, setSelectedDate] = useState(
        moment(value, dateFormat[locale], true).isValid()
            ? moment(value, dateFormat[locale])
            : null,
    );
    useEffect(() => {
        if (selectedDate) {
            setInputValue(selectedDate.format(dateFormat[locale]));
        }
    });

    const [inputValue, setInputValue] = useState(value);

    const handleOnChange = e => {
        if (selectedDate) {
            setSelectedDate(null);
        }
        setInputValue(e.target.value);

        if (moment(e.target.value, dateFormat[locale], true).isValid()) {
            setSelectedDate(moment(e.target.value, dateFormat[locale]));
        }
    };

    return (
        <DateContextProvider value={[selectedDate, setSelectedDate]}>
            <DropDown>
                <DaInput
                    placeholder="JJ/MM/AAAA"
                    mask="99/99/9999"
                    value={inputValue}
                    onChange={handleOnChange}
                    {...rest}
                />

                {rest.readOnly || rest.disabled ? null : (
                    <Popin hasStyle={false}>
                        <Calendar
                            currentMonth={
                                selectedDate &&
                                selectedDate.month() !== moment().month()
                                    ? selectedDate.diff(moment(), 'M') +
                                      moment().month()
                                    : moment().month()
                            }
                            locale={locale}
                            minimumDate={
                                moment(
                                    minimumDate,
                                    dateFormat[locale],
                                    true,
                                ).isValid()
                                    ? moment(minimumDate, dateFormat[locale])
                                    : null
                            }
                            maximumDate={
                                moment(
                                    maximumDate,
                                    dateFormat[locale],
                                    true,
                                ).isValid()
                                    ? moment(maximumDate, dateFormat[locale])
                                    : null
                            }
                            colorStatus={colorStatus}
                        />
                    </Popin>
                )}
            </DropDown>
        </DateContextProvider>
    );
};

DatePicker.propTypes = {
    value: PropTypes.string,

    // Input props
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    hasHelpButton: PropTypes.bool,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),

    // Calendar props
    locale: PropTypes.string,
    minimumDate: PropTypes.string,
    maximumDate: PropTypes.string,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

DatePicker.defaultProps = {
    value: '',

    // Input props
    disabled: false,
    readOnly: false,
    fieldSize: buttonSizeDefault,
    hasHelpButton: false,

    // Calendar props
    locale: 'fr',
    minimumDate: null,
    maximumDate: null,
    colorStatus: formStatusDefault,
};

export default DatePicker;
