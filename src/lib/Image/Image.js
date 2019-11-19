import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
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
    blockHeight: PropTypes.oneOf(Object.values(blockWidthOptions)),
};

Image.defaultProps = {
    blockHeight: blockWidthDefault,
};

export default Image;