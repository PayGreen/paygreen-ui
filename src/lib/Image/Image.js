import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    blockWidthOptions,
    blockWidthDefault,
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
    bottomStyle: PropTypes.oneOf(Object.values(maskOptions))
};

Image.defaultProps = {
    colorChange: false,
    colorTheme: colorThemeDefault,
    blockHeight: blockWidthDefault,
    bottomStyle: maskDefault
};

export default Image;