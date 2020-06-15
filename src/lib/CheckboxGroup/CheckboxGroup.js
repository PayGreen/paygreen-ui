import React from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    labelHtmlTagOptions,
} from '../../shared/constants';
import { CheckboxGroupBase } from './style';
import Checkbox from '../Checkbox/Checkbox';
import DaLabel from '../DaLabel/DaLabel';

const CheckboxGroup = props => {
    const {
        legend,
        value,
        options,
        ...rest
    } = props;

    return (
        <CheckboxGroupBase
            theme={props.theme} // not necessary, only needed for tests
        >
            <DaLabel
                theme={props.theme} // not necessary, only needed for tests
                htmlTag={labelHtmlTagOptions.legend}
                fieldSize={props.fieldSize}
            >
                {legend}
            </DaLabel>

            {options.map((option, index) => (
                <Checkbox
                    {...rest}
                    key={index}
                    id={props.name + index}
                    value={option.value}
                    label={option.label}
                    defaultChecked={option.value === value}
                />
            ))}
        </CheckboxGroupBase>
    );
};

CheckboxGroup.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
        ).isRequired,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    legend: PropTypes.string,
    disabled: PropTypes.bool,
};

CheckboxGroup.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
};

export default CheckboxGroup;
