import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    alignOptions,
    alignDefault,
} from '../../shared/constants';
import { SidebarItemBase } from './style';

const SidebarItem = props => {
    return <SidebarItemBase {...props}>{props.children}</SidebarItemBase>;
};

SidebarItem.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isMain: PropTypes.bool,
    hasHoverBase: PropTypes.bool,
    hasHoverAlternative: PropTypes.bool,
    hasHoverEmphasis: PropTypes.bool,
    align: PropTypes.oneOf(Object.values(alignOptions)),
};

SidebarItem.defaultProps = {
    colorTheme: colorThemeDefault,
    isMain: false,
    hasHoverBase: true,
    hasHoverAlternative: true,
    hasHoverEmphasis: false,
    align: alignDefault,
};

export default SidebarItem;
