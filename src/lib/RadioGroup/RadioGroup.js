import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    labelHtmlTagOptions,
} from '../../shared/constants';
import { RadioGroupBase } from './style';
import Radio from '../Radio/Radio';
import DaLabel from '../DaLabel/DaLabel';

const RadioGroup = props => {
    const {
        radioOptions,
        radioName,
        fieldSize,
        legend,
        defaultValue,
        ...rest
    } = props;

    const [value, setValue] = useState(defaultValue || null);

    const handleChange = e => {
        setValue(e.target.value);
    };
    console.log('state', value);
    return (
        <RadioGroupBase
            theme={props.theme} // not necessary, handlely needed for tests
            readOnly={props.readOnly}
            disabled={props.disabled}
            fieldSize={fieldSize}
            radioName={radioName}
            legend={legend}
            defaultValue={defaultValue}
            changed={handleChange}
        >
            <DaLabel fieldSize={fieldSize} htmlTag={labelHtmlTagOptions.legend}>
                {legend}
            </DaLabel>

            {radioOptions.map((option, index) => (
                <Radio
                    {...rest}
                    key={index}
                    radioId={option.id}
                    radioValue={option.value}
                    radioName={radioName}
                    fieldSize={fieldSize}
                    readOnly={props.readOnly}
                    disabled={option.disabled || props.disabled}
                    radioLabel={option.label}
                    isChecked={option.value === value}
                    changed={handleChange}
                />
            ))}
        </RadioGroupBase>
    );
};

RadioGroup.propTypes = {
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

RadioGroup.defaultProps = {
    disabled: false,
    readOnly: false,
    fieldSize: buttonSizeDefault,
};

export default RadioGroup;
