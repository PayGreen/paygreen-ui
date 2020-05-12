import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    colorTypeOptions,
    colorTypeDefault,
    fontSizeOptions,
    fontSizeDefault,
} from '../../shared/constants';
import { SidebarItemBase } from './style';

const SidebarItem = props => {
    return <SidebarItemBase {...props}>{props.children}</SidebarItemBase>;
};

SidebarItem.propTypes = {
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    isActive: PropTypes.bool,
};

SidebarItem.defaultProps = {
    textSize: fontSizeDefault,
    colorTheme: colorThemeDefault,
    colorType: colorTypeDefault,
    isActive: false,
};

export default SidebarItem;
