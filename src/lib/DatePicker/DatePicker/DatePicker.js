import React, { useState } from 'react';
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
    readOnly,
    disabled,
    fieldSize,
    blockWidth,
    hasHelpButton,
    locale,
    minimumDate,
    maximumDate,
    colorStatus,
    ...rest
}) => {
    const [selectedDate, setSelectedDate] = useState(moment());

    return (
        <DateContextProvider value={[selectedDate, setSelectedDate]}>
            <DatePickerBase {...rest}>
                <DropDown {...rest}>
                    <DatePickerInput
                        value={selectedDate.format('DD/MM/YYYY')}
                        readOnly={readOnly}
                        disabled={disabled}
                        fieldSize={fieldSize}
                        blockWidth={blockWidth}
                        hasHelpButton={hasHelpButton}
                        {...rest}
                    />

                    <Popin {...rest}>
                        <Calendar
                            currentMonth={selectedDate.month()}
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
