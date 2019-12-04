import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
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
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

Banner.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default Banner;