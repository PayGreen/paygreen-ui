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
} from '../../shared/constants';
import { ButtonBase } from './style';

const Button = props => {
    return <ButtonBase {...props}>{props.children}</ButtonBase>;
};

Button.propTypes = {
    buttonStyle: PropTypes.oneOf(Object.values(buttonStyleOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    buttonSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    buttonStyle: buttonStyleDefault,
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
    buttonSize: buttonSizeDefault,
    isDisabled: false,
};

export default Button;
