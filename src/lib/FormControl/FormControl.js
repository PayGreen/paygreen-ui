import React from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { FormControlBase } from './style';
import Message from '../Message/Message';

const FormControl = props => {
    return (
        <FormControlBase {...props}>
            {React.Children.map(props.children, child => {
                if (child.type === Message) {
                    return React.cloneElement(child, {
                        colorStatus: props.colorStatus,
                        required: props.required
                    });
                } else {
                    return React.cloneElement(child, {
                        required: props.required
                    });
                }
            })}
        </FormControlBase>
    );
};

FormControl.propTypes = {
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    required: PropTypes.bool,
};

FormControl.defaultProps = {
    colorStatus: formStatusDefault,
    required: false,
};

export default FormControl;
