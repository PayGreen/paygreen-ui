import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    alignOptions,
    alignDefault,
    blockPaddingOptions,
    blockPaddingDefault,
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
    marginTop: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    paddingBlock: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    resetMargin: PropTypes.bool,
};

ButtonGroup.defaultProps = {
    buttonAlign: alignDefault,
    marginTop: blockPaddingDefault,
    marginBottom: blockPaddingDefault,
    paddingBlock: blockPaddingDefault,
    resetMargin: true,
};

export default ButtonGroup;