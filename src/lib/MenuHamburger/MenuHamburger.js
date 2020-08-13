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
    spaceOptions,
    spaceDefault
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
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

MenuHamburger.defaultProps = {
    arrowDirection: arrowDirectionDefault,
    isOpen: false,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
    marginTop: spaceDefault,
    marginRight: spaceDefault,
    marginLeft: spaceDefault,
    marginBottom: spaceDefault,
};

export default MenuHamburger;
