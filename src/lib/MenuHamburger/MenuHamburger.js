import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import { MenuHamburgerBase } from './style';

class MenuHamburger extends PureComponent {
    render() {
        return <MenuHamburgerBase {...this.props}>
            <span></span>
            <span></span>
            <span></span>
        </MenuHamburgerBase>;
    }
}

MenuHamburger.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

MenuHamburger.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default MenuHamburger;