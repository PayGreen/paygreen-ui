import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorOptions,
    colorDefault
} from '../../shared/constants';
import { LinkBase } from './style';

class Link extends PureComponent {
    render() {
        return <LinkBase {...this.props}>{this.props.children}</LinkBase>;
    }
}

Link.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    color: PropTypes.oneOf(Object.values(colorOptions)),
};

Link.defaultProps = {
    colorType: colorTypeDefault,
    color: colorDefault,
};

export default Link;