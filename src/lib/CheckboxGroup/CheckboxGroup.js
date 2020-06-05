import React, { useState } from 'react';
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
        checkboxOptions,
        checkboxName,
        fieldSize,
        legend,
        defaultValue,

        ...rest
    } = props;

    const [stateValues, setValues] = useState([defaultValue] || []);

    const handleChange = e => {
        const { checked, value } = e.target;
        if (checked) {
            setValues([...stateValues, value]);
        } else {
            let oldValues = stateValues;
            let newValues = oldValues.filter(val => val !== value);
            setValues(newValues);
        }
    };

    return (
        <CheckboxGroupBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            disabled={props.disabled}
            readOnly={props.readOnly}
            checkboxName={checkboxName}
            legend={legend}
            defaultValue={defaultValue}
            checkboxOptions={checkboxOptions}
        >
            <DaLabel
                theme={props.theme} // not necessary, only needed for tests
                fieldSize={fieldSize}
                htmlTag={labelHtmlTagOptions.legend}
            >
                {legend}
            </DaLabel>

            {checkboxOptions.map((option, index) => (
                <Checkbox
                    {...rest}
                    key={index}
                    checkboxId={option.id}
                    checkboxValue={option.value}
                    checkboxName={checkboxName}
                    fieldSize={fieldSize}
                    checkboxReadOnly={props.readOnly}
                    checkboxDisabled={props.disabled}
                    checkboxLabel={option.label}
                    isChecked={stateValues.includes(option.value)}
                    changed={handleChange}
                />
            ))}
        </CheckboxGroupBase>
    );
};

CheckboxGroup.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    checkboxOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
    ).isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    checkboxName: PropTypes.string,
    legend: PropTypes.string,
    defaultValue: PropTypes.string,
};

CheckboxGroup.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
    readOnly: false,
};

export default CheckboxGroup;
