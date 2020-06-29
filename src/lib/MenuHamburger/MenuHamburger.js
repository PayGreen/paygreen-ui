import React from 'react';
import PropTypes from 'prop-types';
import {
    arrowDirectionOptions,
    arrowDirectionDefault,
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
    arrowDirection: PropTypes.oneOf(Object.values(arrowDirectionOptions)),
    isOpen: PropTypes.bool,
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

MenuHamburger.defaultProps = {
    arrowDirection: arrowDirectionDefault,
    isOpen: false,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
};

export default MenuHamburger;
