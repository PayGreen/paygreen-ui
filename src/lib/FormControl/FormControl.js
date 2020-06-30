import React from 'react';
import PropTypes from 'prop-types';
import {
    arrowBlockOptions,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { FieldGroup, FormControlBase } from './style';
import Message from '../Message/Message';

const FormControl = props => {
    return (
        <FormControlBase {...props}>
            <FieldGroup {...props}>
                {React.Children.map(props.children, child => {
                    if (child.type === Message) {
                        return null;
                    } else {
                        return child;
                    }
                })}
            </FieldGroup>

            {React.Children.map(props.children, child => {
                if (child.type === Message) {
                    return React.cloneElement(child, {
                        colorStatus: props.colorStatus,
                        arrowBlock: props.messageStyle,
                    });
                }
            })}
        </FormControlBase>
    );
};

FormControl.propTypes = {
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    messageStyle: PropTypes.oneOf([
        arrowBlockOptions.top,
        arrowBlockOptions.left,
        arrowBlockOptions.right,
    ]),
};

FormControl.defaultProps = {
    colorStatus: formStatusDefault,
    messageStyle: arrowBlockOptions.top,
};

export default FormControl;
