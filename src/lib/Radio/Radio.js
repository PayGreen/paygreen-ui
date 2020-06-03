import React from 'react';
import PropTypes from 'prop-types';
import {
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { RadioBase } from './style';

const Radio = props => {
    const {
        fieldSize,
        readOnly,
        id,
        value,
        radioName,
        label,

        ...rest
    } = props;

    return (
        <RadioBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            disabled={readOnly}
            id={id}
            value={value}
            radioName={radioName}
            label={label}
        >
            <input
                {...rest}
                id={id}
                type="radio"
                name={radioName}
                value={value}
            />
            <label {...rest} htmlFor={id}>
                {label}
            </label>
        </RadioBase>
    );
};

Radio.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        }),
    ).isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
};

Radio.defaultProps = {
    disabled: false,
    readOnly: false,
    fieldSize: buttonSizeDefault,
};

export default Radio;
