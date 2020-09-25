import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateContextProvider } from '../context/DateContext';
import localeConfig from '../localeConfig';
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

const DatePicker = ({
    value,
    locale,
    minimumDate,
    maximumDate,
    placeholder,
    colorStatus,
    ...rest
}) => {
    // Update moment locale globally
    // Note : Default locale of moment is 'en', overwrite it with custom config 'pg-fr'
    moment.updateLocale(
        'pg-' + locale,
        localeConfig['pg-' + locale] ? localeConfig['pg-' + locale] : null,
    );
    const dateFormat = localeConfig['pg-' + locale]
        ? localeConfig['pg-' + locale].longDateFormat.L
        : localeConfig['pg-fr'].longDateFormat.L;

    // Save default value of input ...
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

    console.log(
        'Diff :',
        selectedDate && selectedDate.diff(moment().startOf('M'), 'M'),
        'Selected :',
        selectedDate && selectedDate.format('M'),
        'Current :',
        moment().format('M'),
    );

    return (
        <DateContextProvider value={[selectedDate, setSelectedDate]}>
            <DropDown>
                <DaInput
                    placeholder={placeholder}
                    mask="99/99/9999"
                    value={inputValue}
                    onChange={handleOnChange}
                    {...rest}
                />

                {rest.readOnly || rest.disabled ? null : (
                    <Popin hasStyle={false}>
                        <Calendar
                            currentMonth={
                                selectedDate && selectedDate !== moment()
                                    ? selectedDate.diff(moment().startOf('M'), 'M') +
                                      moment().month()
                                    : moment().month()
                            }
                            minimumDate={
                                moment(minimumDate, dateFormat, true).isValid()
                                    ? moment(minimumDate, dateFormat)
                                    : null
                            }
                            maximumDate={
                                moment(maximumDate, dateFormat, true).isValid()
                                    ? moment(maximumDate, dateFormat)
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
    placeholder: PropTypes.string,
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
