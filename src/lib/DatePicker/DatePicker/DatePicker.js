import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateContextProvider } from '../context/DateContext';
import DatePickerBase from './style';
import DropDown from '../../Dropdown/Dropdown';
import DatePickerInput from '../DatePickerInput/DatePickerInput';
import Popin from '../../Popin/Popin';
import Calendar from '../Calendar/Calendar';
import {
    buttonSizeDefault,
    buttonSizeOptions,
    formStatusDefault,
    formStatusOptions,
    inputWidthDefault,
    inputWidthOptions,
} from '../../../shared/constants';

const DatePicker = ({
    value,
    readOnly,
    disabled,
    fieldSize,
    blockWidth,
    hasHelpButton,
    locale,
    minimumDate,
    maximumDate,
    colorStatus,
    inputRef,
    ...rest
}) => {
    const [selectedDate, setSelectedDate] = useState(
        value ? moment(value, 'DD/MM/YYYY') : null,
    );
    useEffect(() => {
        if (selectedDate) {
            setInputValue(selectedDate.format('DD/MM/YYYY'));
        }
    });

    const [inputValue, setInputValue] = useState(value);

    const handleOnChange = e => {
        if (selectedDate) {
            setSelectedDate(null);
        }
        setInputValue(e.target.value);

        if (moment(e.target.value, 'DD/MM/YYYY', true).isValid()) {
            setSelectedDate(moment(e.target.value, 'DD/MM/YYYY'));
        }
    };

    return (
        <DateContextProvider value={[selectedDate, setSelectedDate]}>
            <DatePickerBase {...rest}>
                <DropDown {...rest}>
                    <DatePickerInput
                        value={inputValue}
                        onChange={handleOnChange}
                        readOnly={readOnly}
                        disabled={disabled}
                        fieldSize={fieldSize}
                        blockWidth={blockWidth}
                        hasHelpButton={hasHelpButton}
                        inputRef={inputRef}
                        {...rest}
                    />

                    <Popin hasStyle={false} {...rest}>
                        <Calendar
                            currentMonth={
                                selectedDate
                                    ? selectedDate.month()
                                    : moment().month()
                            }
                            locale={locale}
                            minimumDate={minimumDate}
                            maximumDate={maximumDate}
                            colorStatus={colorStatus}
                            {...rest}
                        />
                    </Popin>
                </DropDown>
            </DatePickerBase>
        </DateContextProvider>
    );
};

DatePicker.propTypes = {
    value: PropTypes.string,

    // Input props
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasHelpButton: PropTypes.bool,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),

    // Calendar props
    locale: PropTypes.string,
    minimumDate: PropTypes.object, // Moment instance
    maximumDate: PropTypes.object, // Moment instance
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

DatePicker.defaultProps = {
    value: '',

    // Input props
    disabled: false,
    readOnly: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasHelpButton: false,

    // Calendar props
    locale: 'fr',
    minimumDate: null,
    maximumDate: null,
    colorStatus: formStatusDefault,
};

export default DatePicker;
