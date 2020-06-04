import React from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { RadioBase } from './style';

const Radio = props => {
    const {
        fieldSize,
        disabled,
        readOnly,
        radioId,
        radioValue,
        radioName,
        radioLabel,
        isChecked,
        changed,

        ...rest
    } = props;

    return (
        <RadioBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            disabled={disabled}
            readOnly = {readOnly}
            radioId={radioId}
            radioValue={radioValue}
            radioName={radioName}
            radioLabel={radioLabel}
            isChecked={isChecked}
            changed={changed}
        >
            <input
                {...rest}
                disabled={disabled}
                readOnly = {readOnly}
                id={radioId}
                type="radio"
                name={radioName}
                value={radioValue}
                onChange={changed}
                checked={isChecked}
            />
            <label  htmlFor={radioId}>
                {radioLabel}
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
