import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    typeOptions,
    typeDefault,
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
    type: PropTypes.oneOf(Object.values(typeOptions)),
    color: PropTypes.oneOf(Object.values(colorOptions)),
};

Link.defaultProps = {
    type: typeDefault,
    color: colorDefault,
};

export default Link;