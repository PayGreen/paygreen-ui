import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    decorationOptions,
    decorationDefault,
} from '../../shared/constants';
import { BannerBase } from './style';
import { waves } from './style/waves';

const Banner = props => {
    return (
        <BannerBase {...props}>
            {props.topStyle !== decorationOptions.none ? waves : null}
            {props.children}
            {props.bottomStyle !== decorationOptions.none ? waves : null}
        </BannerBase>
    );
};

Banner.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    topStyle: PropTypes.oneOf(Object.values(decorationOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(decorationOptions)),
    isFirstContent: PropTypes.bool
};

Banner.defaultProps = {
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme,
    topStyle: decorationDefault,
    bottomStyle: decorationDefault,
    isFirstContent: false
};

export default Banner;
