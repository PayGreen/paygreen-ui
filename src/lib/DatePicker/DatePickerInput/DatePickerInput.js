import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import DatePickerInputBase from './style';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    inputWidthOptions,
    inputWidthDefault,
} from '../../../shared/constants';

const DatePickerInput = ({
    readOnly,
    disabled,
    fieldSize,
    blockWidth,
    hasHelpButton,
    ...rest
}) => {
    return (
        <DatePickerInputBase
            theme={rest.theme} // not necessary, only needed for tests
            inputType="text"
            inputReadOnly={readOnly}
            inputDisabled={disabled}
            fieldSize={fieldSize}
            blockWidth={blockWidth}
            hasHelpButton={hasHelpButton}
        >
            <InputMask {...rest} mask="99/99/9999" />
        </DatePickerInputBase>
    );
};

DatePickerInput.propTypes = {
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasHelpButton: PropTypes.bool,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

DatePickerInput.defaultProps = {
    disabled: false,
    readOnly: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasHelpButton: false,
};

export default DatePickerInput;
