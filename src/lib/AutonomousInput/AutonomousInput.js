import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { AutonomousInputBase } from './style';

class AutonomousInput extends PureComponent {
    render() {
        return <AutonomousInputBase {...this.props}>
            {this.props.children}
        </AutonomousInputBase>;
    }
}

AutonomousInput.propTypes = {

};

AutonomousInput.defaultProps = {

};

export default AutonomousInput;