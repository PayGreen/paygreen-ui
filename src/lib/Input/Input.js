import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { InputBase } from './style';

class Input extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            mask: '',
            status: props.status
        };
        
        this.handleChange = this.handleChange.bind(this);

        if (this.props.mask) {
            this.state.mask = this.props.mask;
        } else if (this.props.type === 'tel') {
            this.state.mask = '+99 (0)9 99 99 99 99';
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let animation = false;
        if (this.props.status !== this.state.status) {
            animation = true;
            setTimeout(() => {
                animation =  false;
                this.setState({status: this.props.status});
            }, 1);
        }
        
        return <Transition in={animation} timeout={900}>
            {(keyframe) => {
                return (
                    <InputBase
                        status={this.props.status}
                        keyframe={keyframe}
                    >
                        <label htmlFor={this.props.id}>
                            {this.props.label}
                        </label>

                        <InputMask 
                            type={this.props.type}
                            id={this.props.id}
                            placeholder={this.props.placeholder}
                            mask={this.state.mask}
                            value={this.state.value}
                            onChange={this.handleChange}
                        />

                        <span></span>
                    </InputBase>
                );
            }}
        </Transition>;
    }
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    shadow: PropTypes.bool,
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    mask: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    shadow: false,
    status: formStatusDefault,
};

export default Input;