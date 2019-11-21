import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    alignOptions,
    alignDefault,
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
    marginTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    paddingBlock: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    resetMargin: PropTypes.bool,
};

ButtonGroup.defaultProps = {
    buttonAlign: alignDefault,
    marginTop: blockSpaceDefault,
    marginBottom: blockSpaceDefault,
    paddingBlock: blockSpaceDefault,
    resetMargin: true,
};

export default ButtonGroup;