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
    const { radioOptions, radioName, fieldSize, legend, ...rest } = props;

    return (
        <RadioGroupBase
            theme={props.theme} // not necessary, only needed for tests
            inputReadOnly={props.readOnly}
            inputDisabled={props.disabled}
            fieldSize={fieldSize}
            radioName={radioName}
        >
            <DaLabel htmlTag={labelHtmlTagOptions.legend}>{legend}</DaLabel>
            
            {radioOptions.map((option, index) => (
                <Radio
                    {...rest}
                    key={index}
                    id={option.id}
                    value={option.value}
                    radioName={radioName}
                    disabled={option.disabled || props.readOnly}
                    label={option.label}
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
