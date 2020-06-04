import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { RadioBase } from './style';

const Radio = props => {
    const {
        fieldSize,
        radioDisabled,
        radioReadOnly,
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
            radioDisabled={radioDisabled}
            radioReadOnly={radioReadOnly}
            radioId={radioId}
            radioValue={radioValue}
            radioName={radioName}
            radioLabel={radioLabel}
            isChecked={isChecked}
            changed={changed}
        >
            <input
                {...rest}
                disabled={radioDisabled}
                readOnly={radioReadOnly}
                id={radioId}
                type="radio"
                name={radioName}
                value={radioValue}
                onChange={changed}
                checked={isChecked}
            />
            <label htmlFor={radioId}>{radioLabel}</label>
        </RadioBase>
    );
};

Radio.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    radioDisabled: PropTypes.bool,
    radioReadOnly: PropTypes.bool,
    radioId: PropTypes.string,
    radioValue: PropTypes.string,
    radioName: PropTypes.string,
    radioLabel: PropTypes.string,
    isChecked: PropTypes.bool,
    changed: PropTypes.func,
};

Radio.defaultProps = {
    fieldSize: buttonSizeDefault,
    radioDisabled: false,
    radioReadOnly: false,
    isChecked: false,
};

export default Radio;
