import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
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
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),

    isOpen: PropTypes.bool,
};

MenuHamburger.defaultProps = {
    colorPallet: colorPalletDefault,
    colorStatus: formStatusDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    isOpen: false,
};

export default MenuHamburger;
