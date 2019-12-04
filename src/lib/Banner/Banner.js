import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions
} from '../../shared/constants';
import { BannerBase } from './style';
import { waves } from './style/waves';

class Banner extends PureComponent {
    render() {
        return <BannerBase
            {...this.props}
        >
            {waves}
            {this.props.children}
            {waves}
        </BannerBase>;
    }
}

Banner.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
};

Banner.defaultProps = {
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme
};

export default Banner;