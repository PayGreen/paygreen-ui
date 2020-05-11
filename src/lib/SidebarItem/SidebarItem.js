import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorTypeOptions,
    colorTypeDefault,
    greyOptions,
    greyDefault,
    alignOptions,
    alignDefault,
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
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),

    isMain: PropTypes.bool,
    hasHoverBase: PropTypes.bool,
    hasHoverAlternative: PropTypes.bool,
    hasHoverEmphasis: PropTypes.bool,
    align: PropTypes.oneOf(Object.values(alignOptions)),

    isActive: PropTypes.bool,
};

SidebarItem.defaultProps = {
    textSize: fontSizeDefault,

    colorTheme: colorThemeDefault,
    colorPallet: colorPalletDefault,
    // colorPallet: colorPalletOptions.wab,
    colorWab: greyDefault,
    colorType: colorTypeDefault,

    isMain: false,
    hasHoverBase: true,
    hasHoverAlternative: true,
    hasHoverEmphasis: false,
    align: alignDefault,

    isActive: false,
};

export default SidebarItem;
