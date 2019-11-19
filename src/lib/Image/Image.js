import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
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
};

Image.defaultProps = {
    colorChange: false,
    colorTheme: colorThemeDefault,
    blockHeight: blockWidthDefault,
};

export default Image;