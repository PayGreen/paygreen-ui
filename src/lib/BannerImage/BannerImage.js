import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    gradientOptions,
    colorThemeOptions,
    colorThemeDefault,
    waveOptions,
    waveDefault,
} from '../../shared/constants';
import { BannerImageBase } from './style';

class BannerImage extends PureComponent {
    render() {
        return <BannerImageBase
            {...this.props}
        >
            {this.props.children}
        </BannerImageBase>;
    }
}

BannerImage.propTypes = {
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    topStyle: PropTypes.oneOf(Object.values(waveOptions)),
};

BannerImage.defaultProps = {
    gradient: gradientOptions.theme,
    colorTheme: colorThemeDefault,
    topStyle: waveDefault,
};

export default BannerImage;