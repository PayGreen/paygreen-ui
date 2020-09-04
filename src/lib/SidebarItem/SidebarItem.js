import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    rotateSizeOptions,
    sidebarItemHtmlTagOptions,
    sidebarItemHtmlTagDefault,
    spaceOptions,
} from '../../shared/constants';
import { SidebarItemBase } from './style';
import { ArrowBottomIcon } from '../Icon/Icon';

const SidebarItem = ({ children, htmlTag, ...rest }) => {
    return (
        <SidebarItemBase as={htmlTag} {...rest}>
            {children}

            {htmlTag === sidebarItemHtmlTagOptions.button ? (
                <ArrowBottomIcon
                    theme={rest.theme}
                    colorTheme={rest.colorTheme}
                    iconSize={iconSizeOptions.sm}
                    hasBackground={true}
                    rotateSize={
                        rest.isOpen
                            ? rotateSizeOptions.d180
                            : rotateSizeOptions.d0
                    }
                />
            ) : null}
        </SidebarItemBase>
    );
};

SidebarItem.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    htmlTag: PropTypes.oneOf(Object.values(sidebarItemHtmlTagOptions)),
    isActive: PropTypes.bool,
    isOpen: PropTypes.bool,
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
};

SidebarItem.defaultProps = {
    colorTheme: colorThemeDefault,
    htmlTag: sidebarItemHtmlTagDefault,
    isActive: false,
    isOpen: true,
    paddingLateral: spaceOptions.xs,
};

export default SidebarItem;
