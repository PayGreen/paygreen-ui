import React from 'react';
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
    spaceDefault,
    radiusOptions,
    shadowSizeOptions,
    justifyContentOptions,
    alignItemsOptions,
    alignItemsDefault,
} from '../../shared/constants';
import { ImageBase } from './style';

const Image = props => {
    return <ImageBase {...props}>{props.children}</ImageBase>;
};

Image.propTypes = {
    imageType: PropTypes.oneOf(Object.values(imageTypeOptions)),
    isCircle: PropTypes.bool,
    hasDecoration: PropTypes.bool,
    hasModifiedColor: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(imageSizeOptions)),
    blockHeight: PropTypes.oneOf(Object.values(imageSizeOptions)),
    padding: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    bottomStyle: PropTypes.oneOf(Object.values(maskOptions)),
    shadowSize: PropTypes.oneOf(Object.values(shadowSizeOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
};

Image.defaultProps = {
    imageType: imageTypeDefault,
    isCircle: false,
    hasDecoration: false,
    hasModifiedColor: false,
    colorTheme: colorThemeDefault,
    blockWidth: imageSizeDefault,
    blockHeight: imageSizeDefault,
    padding: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLeft: spaceDefault,
    marginRight: spaceDefault,
    radiusSize: radiusOptions.none,
    bottomStyle: maskDefault,
    shadowSize: shadowSizeOptions.none,
    justifyContent: justifyContentOptions.center,
    alignItems: alignItemsDefault,
};

export default Image;
