import React from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { LinkBase } from './style';

const Link = props => {
    return <LinkBase {...props}>{props.children}</LinkBase>;
};

Link.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    hasUnderline: PropTypes.bool,
    hasHover: PropTypes.bool,
    hasUppercase: PropTypes.bool,
    transition: PropTypes.string,
};

Link.defaultProps = {
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
    hasUnderline: true,
    hasHover: true,
    hasUppercase: false,
    transition: null,
};

export default Link;
