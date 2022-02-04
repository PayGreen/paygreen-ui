import React from 'react';
import PropTypes from 'prop-types';
import {
    iconHtmlTagOptions,
    iconHtmlTagDefault,
    colorThemeOptions,
    colorThemeDefault,
    colorStyleOptions,
    colorStyleDefault,
    colorTypeOptions,
    colorTypeDefault,
    gradientOptions,
    fontSizeOptions,
    rotateSizeOptions,
} from '../../shared/constants';
import { ArrowBottomIcon } from '../Icon/Icon';
import { BadgeBase } from './style';

const Badge = props => {
    return (
        <BadgeBase
            as={props.htmlTag}
            type={props.htmlTag === iconHtmlTagOptions.button ? 'button' : null}
            {...props}
        >
            {React.Children.map(props.children, (child, index) => {
                if (!child) {
                    return null;
                }
                
                if (child.type === ArrowBottomIcon) {
                    return React.cloneElement(child, {
                        rotateSize: props.isActive
                            ? rotateSizeOptions.d180
                            : rotateSizeOptions.d0,
                        key: index,
                    });
                }

                return child;
            })}
        </BadgeBase>
    );
};

Badge.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(iconHtmlTagOptions)),
    isActive: PropTypes.bool,
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorStyle: PropTypes.oneOf(Object.values(colorStyleOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
};

Badge.defaultProps = {
    htmlTag: iconHtmlTagDefault,
    isActive: false,
    colorType: colorTypeDefault,
    colorStyle: colorStyleDefault,
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme,
    textSize: fontSizeOptions.xxs,
};

export default Badge;
