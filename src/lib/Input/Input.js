import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault
} from '../../shared/constants';
import { InputBase } from './style';

class Input extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            mask: '',
            status: props.status
        };
        
        if (this.props.mask) {
            this.state.mask = this.props.mask;
        } else if (this.props.type === 'tel') {
            this.state.mask = '+99 (0)9 99 99 99 99';
        }
    }

    render() {
        const {
            params,
            status,
            width,
            label,
            handleChange,
            ...rest
        } = this.props;

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
                        keyframe={keyframe}
                        theme={this.props.theme} // not necessary, only needed for tests
                        params={params}
                        status={status}
                        inputType={this.props.type}
                        inputWidth={width}
                        inputReadOnly={this.props.readOnly}
                        inputDisabled={this.props.disabled}
                    >
                        <label htmlFor={this.props.id}>
                            {label}
                        </label>

                        <InputMask 
                            {...rest}
                            mask={this.state.mask}
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
    width: PropTypes.oneOf(Object.values(inputWidthOptions)),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    params: PropTypes.shape({
        shadow: PropTypes.bool,
    }),
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    mask: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    width: inputWidthDefault,
    params: {
        shadow: false,
    },
    status: formStatusDefault,
    onChange: undefined,
};

export default Input;