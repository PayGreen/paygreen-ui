import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    iconHtmlTagOptions,
    rotateSizeOptions,
} from '../../shared/constants';
import { SidebarItemBase } from './style';
import { ArrowBottomIcon } from '../Icon/Icon';

const SidebarItem = props => {
    return (
        <SidebarItemBase {...props}>
            {props.isClickable ? (
                <ArrowBottomIcon
                    theme={props.theme}
                    htmlTag={iconHtmlTagOptions.button}
                    colorTheme={props.colorTheme}
                    iconSize={iconSizeOptions.sm}
                    hasBackground={true}
                    rotateSize={
                        props.isOpen
                            ? rotateSizeOptions.d180
                            : rotateSizeOptions.d0
                    }
                />
            ) : null}

            {props.children}
        </SidebarItemBase>
    );
};

SidebarItem.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isActive: PropTypes.bool,
    isOpen: PropTypes.bool,
    isClickable: PropTypes.bool,
};

SidebarItem.defaultProps = {
    colorTheme: colorThemeDefault,
    isActive: false,
    isOpen: true,
    isClickable: false,
};

export default SidebarItem;
