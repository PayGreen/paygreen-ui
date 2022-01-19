import React from 'react';
import PropTypes from 'prop-types';
import { colorThemeOptions, colorThemeDefault } from '../../shared/constants';
import { MenuListItemBase } from './style';

const MenuListItem = props => {
    return <MenuListItemBase {...props}>{props.children}</MenuListItemBase>;
};

MenuListItem.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

MenuListItem.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default MenuListItem;
