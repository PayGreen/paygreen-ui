import React from 'react';
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
    const { legend, value, options, ...rest } = props;

    return (
        <RadioGroupBase
            theme={props.theme} // not necessary, only needed for tests
        >
            {legend && legend.length ? (
                <DaLabel
                    theme={props.theme} // not necessary, only needed for tests
                    htmlTag={labelHtmlTagOptions.legend}
                    fieldSize={props.fieldSize}
                    required={props.required}
                >
                    {legend}
                </DaLabel>
            ) : null}

            {options.map((option, index) => (
                <Radio
                    {...rest}
                    key={index}
                    id={props.name + index}
                    value={option.value}
                    label={option.label}
                    defaultChecked={option.value === value}
                />
            ))}
        </RadioGroupBase>
    );
};

RadioGroup.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.any.isRequired,
        }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    legend: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
};

RadioGroup.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
    required: false,
};

export default RadioGroup;
