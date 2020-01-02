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
    spaceOptions,
    radiusOptions,
    shadowStyleOptions,
    justifyContentOptions,
    alignItemsOptions,
    alignItemsDefault,
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
    cropCircle: PropTypes.bool,
    colorChange: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(imageSizeOptions)),
    blockHeight: PropTypes.oneOf(Object.values(imageSizeOptions)),
    padding: PropTypes.oneOf(Object.values(spaceOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(maskOptions)),
    shadow: PropTypes.oneOf(Object.values(shadowStyleOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
};

Image.defaultProps = {
    imageType: imageTypeDefault,
    cropCircle: false,
    colorChange: false,
    colorTheme: colorThemeDefault,
    blockWidth: imageSizeDefault,
    blockHeight: imageSizeDefault,
    padding: spaceOptions.none,
    radiusSize: radiusOptions.none,
    bottomStyle: maskDefault,
    shadow: shadowStyleOptions.none,
    justifyContent: justifyContentOptions.center,
    alignItems: alignItemsDefault,
};

export default Image;