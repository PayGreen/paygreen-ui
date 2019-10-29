import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { convertJsonToValuesArray } from '../../shared/utils';
import {
    typeOptions,
    typeDefault,
    colorOptions,
    colorDefault
} from '../../shared/const';
import { LinkBase } from './style';

class Link extends PureComponent {
    render() {
        return <LinkBase {...this.props}>{this.props.children}</LinkBase>;
    }
}

Link.propTypes = {
    type: PropTypes.oneOf(convertJsonToValuesArray(typeOptions)),
    color: PropTypes.oneOf(convertJsonToValuesArray(colorOptions)),
};

Link.defaultProps = {
    type: typeDefault,
    color: colorDefault,
};

export default Link;