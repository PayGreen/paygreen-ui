import React from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import DaHelp from '../DaHelp/DaHelp';
import DaInput from '../DaInput/DaInput';
import DaSelect from '../DaSelect/DaSelect';
import DatePicker from '../DatePicker/DatePicker';
import Message from '../Message/Message';
import { FormControlBase } from './style';

const FormControl = ({ children, required, colorStatus, ...rest }) => {
    let hasHelpButton = false;

    React.Children.map(children, child => {
        if (typeof child === 'object' && child.type === DaHelp) {
            hasHelpButton = true;
        }
    });

    return (
        <FormControlBase
            {...rest}
            colorStatus={colorStatus}
            hasHelpButton={hasHelpButton}
        >
            {React.Children.map(children, child => {
                switch (child && child.type) {
                    case null:
                        return null;
                    case DaHelp:
                        return child;
                    case Message:
                        return React.cloneElement(child, {
                            colorStatus: colorStatus,
                        });
                    case DaInput:
                    case DaSelect:
                    case DatePicker:
                        return React.cloneElement(child, {
                            hasHelpButton: hasHelpButton,
                            required: required,
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
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

FormControl.defaultProps = {
    colorStatus: formStatusDefault,
    required: false,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default FormControl;
