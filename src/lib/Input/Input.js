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
            value: props.value !== undefined ? props.value : '',
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
                        theme={this.props.theme} // not necessary, only needed for tests
                        keyframe={keyframe}
                        params={this.props.params}
                        status={this.props.status}
                        type={this.props.type}
                        disabled={this.props.disabled}
                    >
                        <label htmlFor={this.props.id}>
                            {this.props.label}
                        </label>

                        <InputMask 
                            {...this.props}
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
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    params: PropTypes.shape({
        shadow: PropTypes.bool,
    }),
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    mask: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    params: {
        shadow: false,
    },
    status: formStatusDefault,
};

export default Input;