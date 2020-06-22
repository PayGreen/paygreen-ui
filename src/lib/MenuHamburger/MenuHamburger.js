import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
} from '../../shared/constants';
import { MenuHamburgerBase } from './style';

const MenuHamburger = props => (
    <MenuHamburgerBase {...props}>
        <span></span>
        <span></span>
        <span></span>
    </MenuHamburgerBase>
);

MenuHamburger.propTypes = {
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    isOpen: PropTypes.bool,
};

MenuHamburger.defaultProps = {
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    isOpen: false,
};

export default MenuHamburger;
