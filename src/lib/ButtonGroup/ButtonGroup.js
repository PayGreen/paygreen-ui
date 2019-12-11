import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    alignOptions,
    blockSpaceOptions,
    blockSpaceDefault,
} from '../../shared/constants';
import { ButtonGroupBase } from './style';

class ButtonGroup extends PureComponent {
    render() {
        return <ButtonGroupBase
            {...this.props}
        >
            {this.props.children}
        </ButtonGroupBase>;
    }
}

ButtonGroup.propTypes = {
    buttonAlign: PropTypes.oneOf(Object.values(alignOptions)),
    resetMargin: PropTypes.bool,
    marginLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockSpaceOptions)),
};

ButtonGroup.defaultProps = {
    buttonAlign: alignOptions.center,
    resetMargin: true,
    marginLateral: blockSpaceDefault,
    marginTop: blockSpaceDefault,
    marginBottom: blockSpaceDefault,
};

export default ButtonGroup;