import React from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { FormControlBase } from './style';
import Message from '../Message/Message';

const FormControl = ({ children, required, colorStatus, ...rest }) => {
    return (
        <FormControlBase {...rest} colorStatus={colorStatus}>
            {React.Children.map(children, child => {
                switch (child && child.type) {
                    case null:
                        return null;
                    case Message:
                        return React.cloneElement(child, {
                            colorStatus: colorStatus,
                        });
                    default:
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
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

FormControl.defaultProps = {
    colorStatus: formStatusDefault,
    required: false,
    hasHelpButton: false,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default FormControl;
