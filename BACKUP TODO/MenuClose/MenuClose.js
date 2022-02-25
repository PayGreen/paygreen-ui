import React from 'react';
import PropTypes from 'prop-types';
import {
    positionOptions,
    positionDefault,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    rotateSizeOptions,
} from '../../shared/constants';
import {
    ArrowTopIcon,
    ArrowBottomIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from '../Icon/Icon';
import { MenuCloseBase } from './style';

const MenuClose = props => {
    const arrowProps = {
        theme: props.theme, // not necessary, only needed for tests
        iconSize: iconSizeOptions.lg,
        colorTheme: props.colorTheme,
        rotateSize: props.isOpen
            ? rotateSizeOptions.d180
            : rotateSizeOptions.d0,
    };

    let arrow;

    switch (props.position) {
        case positionOptions.top:
            arrow = <ArrowTopIcon {...arrowProps} />;
            break;

        case positionOptions.left:
            arrow = <ArrowLeftIcon {...arrowProps} />;
            break;

        case positionOptions.right:
            arrow = <ArrowRightIcon {...arrowProps} />;
            break;
        
        default:
            arrow = <ArrowBottomIcon {...arrowProps} />;
    }

    return (
        <MenuCloseBase type="button" {...props}>
            <svg className="background" viewBox="0 0 170 28.8">
                <path d="M85,0.8c37.6,0,63,28,85,28H0C29,28.8,47.4,0.8,85,0.8z" />
            </svg>

            {arrow}
        </MenuCloseBase>
    );
};

MenuClose.propTypes = {
    position: PropTypes.oneOf(Object.values(positionOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isOpen: PropTypes.bool,
};

MenuClose.defaultProps = {
    position: positionDefault,
    colorTheme: colorThemeDefault,
    isOpen: true,
};

export default MenuClose;
