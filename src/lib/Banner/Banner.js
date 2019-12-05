import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    waveOptions,
    waveDefault
} from '../../shared/constants';
import { BannerBase } from './style';
import { waves } from './style/waves';

class Banner extends PureComponent {
    render() {
        return <BannerBase
            {...this.props}
        >
            {this.props.topStyle !== waveOptions.none ? waves : null}
            {this.props.children}
            {this.props.bottomStyle !== waveOptions.none ? waves : null}
        </BannerBase>;
    }
}

Banner.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    topStyle: PropTypes.oneOf(Object.values(waveOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(waveOptions)),
};

Banner.defaultProps = {
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme,
    topStyle: waveDefault,
    bottomStyle: waveDefault,
};

export default Banner;