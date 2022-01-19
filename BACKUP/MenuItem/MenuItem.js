import React from 'react';
import PropTypes from 'prop-types';
import { colorThemeOptions, colorThemeDefault } from '../../shared/constants';
import { MenuItemBase } from './style';

const MenuItem = props => {
    return <MenuItemBase {...props}>{props.children}</MenuItemBase>;
};

MenuItem.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isClickable: PropTypes.bool,
};

MenuItem.defaultProps = {
    colorTheme: colorThemeDefault,
    isClickable: true,
};

export default MenuItem;
