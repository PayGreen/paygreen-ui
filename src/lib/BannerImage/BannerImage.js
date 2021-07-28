import React from 'react';
import PropTypes from 'prop-types';
import {
    gradientOptions,
    colorThemeOptions,
    colorThemeDefault,
    decorationOptions,
    decorationDefault,
    decorationImageOptions,
    decorationImageDefault,
} from '../../shared/constants';
import { BannerImageBase } from './style';

const BannerImage = props => {
    return <BannerImageBase {...props}>{props.children}</BannerImageBase>;
};

BannerImage.propTypes = {
    image: PropTypes.string.isRequired,
    hasModifiedColor: PropTypes.bool,
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    topStyle: PropTypes.oneOf(Object.values(decorationOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(decorationImageOptions)),
};

BannerImage.defaultProps = {
    hasModifiedColor: true,
    gradient: gradientOptions.theme,
    colorTheme: colorThemeDefault,
    topStyle: decorationDefault,
    bottomStyle: decorationImageDefault,
};

export default BannerImage;
