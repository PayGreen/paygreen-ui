import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { AutonomousInputBase } from './style';

class AutonomousInput extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value !== undefined ? props.value : '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {
            status,
            submittedButton,
            children,
            ...rest
        } = this.props;

        return <AutonomousInputBase
            theme={this.props.theme} // not necessary, only needed for tests
            status={status}
        >
            <input
                {...rest}
                value={this.state.value}
                onChange={this.handleChange}
            />

            {children}
        </AutonomousInputBase>;
    }
}

AutonomousInput.propTypes = {
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    submittedButton: PropTypes.string
};

AutonomousInput.defaultProps = {
    status: formStatusDefault,
    submittedButton: null
};

export default AutonomousInput;