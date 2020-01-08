import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    alignOptions,
    spaceOptions,
    spaceDefault,
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
    align: PropTypes.oneOf(Object.values(alignOptions)),
    resetMargin: PropTypes.bool,
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

ButtonGroup.defaultProps = {
    align: alignOptions.center,
    resetMargin: true,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default ButtonGroup;