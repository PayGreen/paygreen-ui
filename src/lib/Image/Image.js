import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    blockWidthOptions,
    blockWidthDefault,
    radiusOptions,
    shadowStyleOptions
} from '../../shared/constants';
import { ImageBase } from './style';

class Image extends PureComponent {
    render() {
        return <ImageBase {...this.props}>
            {this.props.children}
        </ImageBase>;
    }
}

Image.propTypes = {
    colorChange: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    blockHeight: PropTypes.oneOf(Object.values(blockWidthOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(maskOptions)),
    shadow: PropTypes.oneOf(Object.values(shadowStyleOptions)),
};

Image.defaultProps = {
    colorChange: false,
    colorTheme: colorThemeDefault,
    blockHeight: blockWidthDefault,
    radiusOptions: radiusOptions.none,
    bottomStyle: maskDefault,
    shadow: shadowStyleOptions.none
};

export default Image;