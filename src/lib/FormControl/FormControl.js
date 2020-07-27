import React from 'react';
import PropTypes from 'prop-types';
import { formStatusOptions, formStatusDefault } from '../../shared/constants';
import { FormControlBase } from './style';
import Message from '../Message/Message';

const FormControl = ({children, required, colorStatus, ...rest}) => {
    return (
        <FormControlBase {...rest} colorStatus={colorStatus}>
            {React.Children.map(children, child => {
                if (child.type === Message) {
                    return React.cloneElement(child, {
                        colorStatus: colorStatus,
                    });
                } else {
                    return React.cloneElement(child, {
                        required: required,
                    });
                }
            })}
        </FormControlBase>
    );
};

FormControl.propTypes = {
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    required: PropTypes.bool,
    hasHelpButton: PropTypes.bool,
};

FormControl.defaultProps = {
    colorStatus: formStatusDefault,
    required: false,
    hasHelpButton: false,
};

export default FormControl;
