import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    decorationOptions,
    decorationDefault
} from '../../shared/constants';
import { BannerBase } from './style';
import { waves } from './style/waves';

class Banner extends PureComponent {
    render() {
        return <BannerBase
            {...this.props}
        >
            {this.props.topStyle !== decorationOptions.none ? waves : null}
            {this.props.children}
            {this.props.bottomStyle !== decorationOptions.none ? waves : null}
        </BannerBase>;
    }
}

Banner.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    topStyle: PropTypes.oneOf(Object.values(decorationOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(decorationOptions)),
};

Banner.defaultProps = {
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme,
    topStyle: decorationDefault,
    bottomStyle: decorationDefault,
};

export default Banner;