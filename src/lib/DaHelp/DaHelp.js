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
} from '../../shared/constants';
import { DaHelpBase } from './style';

const DaHelp = props => {
    return (
        <DaHelpBase {...props}>
            {props.children}
        </DaHelpBase>
    );
};

DaHelp.propTypes = {
    buttonStyle: PropTypes.oneOf(Object.values(buttonStyleOptions)),
    buttonSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf([
        colorPalletOptions.theme,
        colorPalletOptions.status,
    ]),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    isDisabled: PropTypes.bool,
    icon: PropTypes.element,
};

DaHelp.defaultProps = {
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

export default DaHelp;
