import React from 'react';
import PropTypes from 'prop-types';
import {
    gradientOptions,
    colorThemeOptions,
    colorThemeDefault,
    decorationImageOptions,
    decorationImageDefault,
} from '../../shared/constants';
import { BannerImageBase } from './style';

const BannerImage = ({children, ...rest }) => {
    return <BannerImageBase {...rest}>{children}</BannerImageBase>;
};

BannerImage.propTypes = {
    image: PropTypes.string.isRequired,
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    topStyle: PropTypes.oneOf(Object.values(decorationImageOptions)),
};

BannerImage.defaultProps = {
    hasModifiedColor: false,
    gradient: gradientOptions.theme,
    colorTheme: colorThemeDefault,
    topStyle: decorationImageDefault,
    bottomStyle: decorationImageDefault
};

export default BannerImage;
