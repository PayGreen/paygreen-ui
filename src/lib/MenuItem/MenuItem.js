import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import { MenuItemBase } from './style';

class MenuItem extends PureComponent {
    render() {
        return <MenuItemBase
            {...this.props}
        >
            {this.props.children}
        </MenuItemBase>;
    }
}

MenuItem.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    hoverEmphasis: PropTypes.bool,
};

MenuItem.defaultProps = {
    colorTheme: colorThemeDefault,
    hoverEmphasis: false,
};

export default MenuItem;