import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { RadioBase } from './style';

const Radio = ({ theme, fieldSize, label, inputRef, ...rest }) => {
    return (
        <RadioBase
            theme={theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            isDisabled={rest.disabled}
        >
            <input {...rest} ref={inputRef} type="radio" />
            <label htmlFor={rest.id}>{label}</label>
        </RadioBase>
    );
};

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

Radio.defaultProps = {
    disabled: false,
    fieldSize: buttonSizeDefault,
};

export default Radio;
