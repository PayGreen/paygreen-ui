import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    alignOptions,
    alignDefault
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
    isMain: PropTypes.bool,
    hoverBase: PropTypes.bool,
    hoverAlternative: PropTypes.bool,
    hoverEmphasis: PropTypes.bool,
    align: PropTypes.oneOf(Object.values(alignOptions))
};

MenuItem.defaultProps = {
    colorTheme: colorThemeDefault,
    isMain: false,
    hoverBase: true,
    hoverAlternative: true,
    hoverEmphasis: false,
    align: alignDefault
};

export default MenuItem;