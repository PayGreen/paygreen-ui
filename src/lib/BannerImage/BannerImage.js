import React from 'react';
import { bool, string, oneOf } from 'prop-types';
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
    image: string.isRequired,
    gradient: oneOf(Object.values(gradientOptions)),
    colorTheme: oneOf(Object.values(colorThemeOptions)),
    useColorTheme: bool,
    topStyle: oneOf(Object.values(decorationImageOptions)),
    bottomStyle: oneOf(Object.values(decorationImageOptions))
};

BannerImage.defaultProps = {
    useColorTheme: true,
    gradient: gradientOptions.theme,
    colorTheme: colorThemeDefault,
    topStyle: decorationImageDefault,
    bottomStyle: decorationImageDefault
};

export default BannerImage;
