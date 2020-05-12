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

    hasHoverBase: PropTypes.bool,
};

SidebarList.defaultProps = {
    textSize: fontSizeDefault,

    colorTheme: colorThemeDefault,
    colorPallet: colorPalletDefault,
    colorWab: greyDefault,
    colorType: colorTypeDefault,

    hasHoverBase: true,
};

export default SidebarList;
