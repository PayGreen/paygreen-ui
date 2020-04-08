import React from 'react';
import PropTypes from 'prop-types';
import {
    gradientOptions,
    colorThemeOptions,
    colorThemeDefault,
    decorationOptions,
    decorationDefault,
} from '../../shared/constants';
import { BannerImageBase } from './style';

const BannerImage = props => {
    return <BannerImageBase {...props}>{props.children}</BannerImageBase>;
};

BannerImage.propTypes = {
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    topStyle: PropTypes.oneOf(Object.values(decorationOptions)),
};

BannerImage.defaultProps = {
    gradient: gradientOptions.theme,
    colorTheme: colorThemeDefault,
    topStyle: decorationDefault,
};

export default BannerImage;
