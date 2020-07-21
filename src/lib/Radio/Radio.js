import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { RadioBase } from './style';

const Radio = props => {
    const { fieldSize, label, id, ref, ...rest } = props;

    return (
        <RadioBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            isDisabled={props.disabled}
        >
            <input {...rest} ref={ref} id={id} type="radio" />
            <label htmlFor={id}>{label}</label>
        </RadioBase>
    );
};

Radio.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
    ]),
};

Radio.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
};

export default Radio;
