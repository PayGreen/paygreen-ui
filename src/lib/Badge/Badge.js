import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    colorTypeOptions,
    colorTypeDefault,
    fontSizeOptions,
} from '../../shared/constants';
import { BadgeBase } from './style';

const Badge = props => {
    return <BadgeBase {...props}>{props.children}</BadgeBase>;
};

Badge.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
};

Badge.defaultProps = {
    colorType: colorTypeDefault,
    textSize: fontSizeOptions.xxs,
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme,
};

export default Badge;
