import React from "react";
import PropTypes from "prop-types";
import { colorThemeOptions, colorThemeDefault } from "../../shared/constants";
import { MenuHamburgerBase } from "./style";

const MenuHamburger = props => (
    <MenuHamburgerBase
        {...props}
        isOpen={props.isOpen}
    >
        <span></span>
        <span></span>
        <span></span>
    </MenuHamburgerBase>
);

MenuHamburger.propTypes = {
  colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions))
};

MenuHamburger.defaultProps = {
  colorTheme: colorThemeDefault
};

export default MenuHamburger;
