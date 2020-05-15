import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    blockWidthOptions,
} from '../../shared/constants';
import { BadgeBase } from './style';

const Badge = props => {
    return (
        <BadgeBase {...props}>
            <span className="children">{props.children}</span>
        </BadgeBase>
    );
};

Badge.propTypes = {
    isWhite: PropTypes.bool,
    textSize: PropTypes.oneOf(Object.values(blockWidthOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
};

Badge.defaultProps = {
    isWhite: false,
    textSize: blockWidthOptions.sm,
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme,
};

export default Badge;
