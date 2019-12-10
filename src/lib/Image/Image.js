import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    imageTypeOptions,
    imageTypeDefault,
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
    imageType: PropTypes.oneOf(Object.values(imageTypeOptions)),
    colorChange: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(imageSizeOptions)),
    blockHeight: PropTypes.oneOf(Object.values(imageSizeOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(maskOptions)),
    shadow: PropTypes.oneOf(Object.values(shadowStyleOptions)),
    hideOnMobile: PropTypes.bool
};

Image.defaultProps = {
    imageType: imageTypeDefault,
    colorChange: false,
    colorTheme: colorThemeDefault,
    blockWidth: imageSizeDefault,
    blockHeight: imageSizeDefault,
    radiusSize: radiusOptions.none,
    bottomStyle: maskDefault,
    shadow: shadowStyleOptions.none,
    hideOnMobile: false
};

export default Image;