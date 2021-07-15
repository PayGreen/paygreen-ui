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
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

Radio.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
};

export default Radio;
