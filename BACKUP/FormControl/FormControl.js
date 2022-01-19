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
import DaTextarea from '../DaTextarea/DaTextarea';
import DatePicker from '../DatePicker/DatePicker';
import Message from '../Message/Message';
import { FormControlBase } from './style';

const FormControl = ({
    children,
    required,
    colorStatus,
    hasStaticWidth,
    ...rest
}) => {
    let hasHelpButton = false;

    React.Children.map(children, child => {
        if (child && child.type === DaHelp) {
            hasHelpButton = true;
        }
    });

    return (
        <FormControlBase
            {...rest}
            colorStatus={colorStatus}
            hasHelpButton={hasHelpButton}
            hasStaticWidth={hasStaticWidth}
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
                            hasStaticWidth: hasStaticWidth,
                        });
                    case DaInput:
                    case DaSelect:
                    case DatePicker:
                        return React.cloneElement(child, {
                            hasHelpButton: hasHelpButton,
                            hasStaticWidth: hasStaticWidth,
                            required: required,
                        });
                    case DaTextarea:
                        return React.cloneElement(child, {
                            hasStaticWidth: hasStaticWidth,
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
    hasStaticWidth: PropTypes.bool,
};

FormControl.defaultProps = {
    colorStatus: formStatusDefault,
    required: false,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    hasStaticWidth: false,
};

export default FormControl;
