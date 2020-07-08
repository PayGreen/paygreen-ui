import React from 'react';
import PropTypes from 'prop-types';
import { formStatusOptions, formStatusDefault } from '../../shared/constants';
import { FormControlBase } from './style';
import Message from '../Message/Message';
import DaLabel from '../DaLabel/DaLabel';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import RadioGroup from '../RadioGroup/RadioGroup';

const FormControl = props => {
    return (
        <FormControlBase {...props}>
            {React.Children.map(props.children, child => {
                if (child.type === Message) {
                    return React.cloneElement(child, {
                        colorStatus: props.colorStatus,
                    });
                } else if (
                    child.type === DaLabel ||
                    child.type === RadioGroup ||
                    child.type === CheckboxGroup
                ) {
                    return React.cloneElement(child, {
                        isRequired: props.isRequired,
                    });
                } else {
                    return React.cloneElement(child, {
                        required: props.isRequired,
                    });
                }
            })}
        </FormControlBase>
    );
};

FormControl.propTypes = {
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    isRequired: PropTypes.bool,
    hasHelpButton: PropTypes.bool,
};

FormControl.defaultProps = {
    colorStatus: formStatusDefault,
    isRequired: false,
    hasHelpButton: false,
};

export default FormControl;
