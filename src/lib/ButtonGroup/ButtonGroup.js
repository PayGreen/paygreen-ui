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
        return <ButtonGroupBase
            theme={this.props.theme} // not necessary, only needed for tests
            buttonAlign={this.props.buttonAlign}
            blockMargin={this.props.blockMargin}
        >
            {this.props.children}
        </ButtonGroupBase>;
    }
}

ButtonGroup.propTypes = {
    buttonAlign: PropTypes.oneOf(Object.values(alignOptions)),
    blockMargin: PropTypes.oneOf(Object.values(spaceOptions)),
};

ButtonGroup.defaultProps = {
    buttonAlign: alignDefault,
    blockMargin: spaceDefault
};

export default ButtonGroup;