import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    spaceOptions,
    spaceDefault,
    alignOptions,
    alignDefault
} from '../../shared/constants';
import { ButtonGroupBase } from './style';

class ButtonGroup extends PureComponent {
    render() {
        return <ButtonGroupBase {...this.props}>{this.props.children}</ButtonGroupBase>;
    }
}

ButtonGroup.propTypes = {
    align: PropTypes.oneOf(Object.values(alignOptions)),
    margin: PropTypes.oneOf(Object.values(spaceOptions)),
};

ButtonGroup.defaultProps = {
    align: alignDefault,
    margin: spaceDefault
};

export default ButtonGroup;