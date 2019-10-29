import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { convertJsonToValuesArray } from '../../shared/utils';
import {
    spaceOptions,
    alignOptions,
    alignDefault
} from '../../shared/const';
import { ButtonGroupBase } from './style';

class ButtonGroup extends PureComponent {
    render() {
        return <ButtonGroupBase {...this.props}>{this.props.children}</ButtonGroupBase>;
    }
}

ButtonGroup.propTypes = {
    align: PropTypes.oneOf(convertJsonToValuesArray(alignOptions)),
    margin: PropTypes.oneOf(convertJsonToValuesArray(spaceOptions)),
};

ButtonGroup.defaultProps = {
    align: alignDefault,
    margin: 'xs'
};

export default ButtonGroup;