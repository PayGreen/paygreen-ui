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

    const [stateValue, setValue] = useState(defaultValue || null);

    const handleChange = e => {
        setValue(e.target.value);
    };

    return (
        <RadioGroupBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            disabled={props.disabled}
            readOnly={props.readOnly}
            radioName={radioName}
            legend={legend}
            defaultValue={defaultValue}
            radioOptions={radioOptions}
        >
            <DaLabel
                theme={props.theme} // not necessary, only needed for tests
                fieldSize={fieldSize}
                htmlTag={labelHtmlTagOptions.legend}
            >
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
                    radioReadOnly={props.readOnly}
                    radioDisabled={props.disabled}
                    radioLabel={option.label}
                    isChecked={option.value === stateValue}
                    changed={handleChange}
                />
            ))}
        </RadioGroupBase>
    );
};

RadioGroup.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    radioOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
    ).isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    radioName: PropTypes.string,
    legend: PropTypes.string,
    defaultValue: PropTypes.string,
};

RadioGroup.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
    readOnly: false,
};

export default RadioGroup;
