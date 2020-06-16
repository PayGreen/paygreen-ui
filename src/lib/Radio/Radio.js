import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { RadioBase } from './style';

const Radio = props => {
    const { fieldSize, label, id, ...rest } = props;

    return (
        <RadioBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            isDisabled={props.disabled}
        >
            <input {...rest} id={id} type="radio" />
            <label htmlFor={id}>{label}</label>
        </RadioBase>
    );
};

Radio.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

Radio.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
};

export default Radio;
