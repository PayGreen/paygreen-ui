import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    imageSizeOptions,
    imageSizeDefault,
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
    blockWidth: PropTypes.oneOf(Object.values(imageSizeOptions)),
    blockHeight: PropTypes.oneOf(Object.values(imageSizeOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(maskOptions)),
    shadow: PropTypes.oneOf(Object.values(shadowStyleOptions)),
};

Image.defaultProps = {
    colorChange: false,
    colorTheme: colorThemeDefault,
    blockWidth: imageSizeDefault,
    blockHeight: imageSizeDefault,
    radiusOptions: radiusOptions.none,
    bottomStyle: maskDefault,
    shadow: shadowStyleOptions.none
};

export default Image;