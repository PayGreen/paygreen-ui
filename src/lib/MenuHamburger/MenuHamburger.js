import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import { MenuHamburgerBase } from './style';

const MenuHamburger = props => (
    <MenuHamburgerBase
        {...props}
    >
        <span></span>
        <span></span>
        <span></span>
    </MenuHamburgerBase>
);

MenuHamburger.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isOpen: PropTypes.bool
};

MenuHamburger.defaultProps = {
    colorTheme: colorThemeDefault,
    isOpen: false
};

export default MenuHamburger;
