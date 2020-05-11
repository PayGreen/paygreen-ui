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
import { SidebarListBase } from './style';

const SidebarList = props => {
    return (
        <SidebarListBase {...props}>
            {React.Children.map(props.children, (child, index) =>
                child ? (
                    <li key={index} {...props}>
                        {child}
                    </li>
                ) : null,
            )}
        </SidebarListBase>
    );
};
SidebarList.propTypes = {
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
};

SidebarList.defaultProps = {
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
};

export default SidebarList;
