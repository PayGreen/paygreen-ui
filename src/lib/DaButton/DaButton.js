import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonStyleOptions,
    buttonStyleDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    gradientOptions,
    gradientDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { DaButtonBase } from './style';

const DaButton = props => {
    return (
        <DaButtonBase {...props}>
            {props.icon ? props.icon : null} {props.children}
        </DaButtonBase>
    );
};

DaButton.propTypes = {
    buttonStyle: PropTypes.oneOf(Object.values(buttonStyleOptions)),
    buttonSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    isDisabled: PropTypes.bool,
    icon: PropTypes.element,
};

DaButton.defaultProps = {
    buttonStyle: buttonStyleDefault,
    buttonSize: buttonSizeDefault,
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    gradient: gradientDefault,
    isDisabled: false,
    icon: null,
};

export default DaButton;
