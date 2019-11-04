import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { InputBase } from './style';

class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <InputBase>
            <label htmlFor={this.props.id}>
                {this.props.label}
            </label>

            <input 
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={this.handleChange}
            />
        </InputBase>;
    }
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    shadow: PropTypes.bool,
    status: PropTypes.oneOf(Object.values(formStatusOptions))
};

Input.defaultProps = {
    type: 'text',
    shadow: false,
    status: formStatusDefault,
};

export default Input;