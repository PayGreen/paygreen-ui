import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    gradientOptions,
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
} from '../../shared/constants';
import { BannerBase } from './style';

class Banner extends PureComponent {
    render() {
        return <BannerBase
            {...this.props}
        >
            {this.props.children}
        </BannerBase>;
    }
}

Banner.propTypes = {
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    topStyle: PropTypes.oneOf(Object.values(maskOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(maskOptions)),
};

Banner.defaultProps = {
    gradient: gradientOptions.theme,
    colorTheme: colorThemeDefault,
    topStyle: maskDefault,
    bottomStyle: maskDefault,
};

export default Banner;