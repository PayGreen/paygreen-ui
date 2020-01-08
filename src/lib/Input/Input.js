import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions
} from '../../shared/constants';
import { InputBase } from './style';

class Input extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            mask: '',
            status: props.status
        };
        
        if (props.mask && props.mask.length) {
            this.state.mask = props.mask;
        } else if (props.type === 'tel') {
            this.state.mask = '+99 (0)9 99 99 99 99';
        }
    }

    render() {
        const {
            status,
            label,
            hasShadow,
            blockWidth,
            marginTop,
            marginBottom,

            // remove mask from rest
            mask,
            
            ...rest
        } = this.props;

        let animation = false;
        if (status !== this.state.status) {
            animation = true;

            setTimeout(() => {
                animation =  false;
                this.setState({status: status});
            }, 1);
        }

        return <Transition in={animation} timeout={900}>
            {(keyframe) => {
                return (
                    <InputBase
                        keyframe={keyframe}
                        theme={this.props.theme} // not necessary, only needed for tests
                        status={status}
                        inputType={this.props.type}
                        inputReadOnly={this.props.readOnly}
                        inputDisabled={this.props.disabled}
                        hasShadow={hasShadow}
                        blockWidth={blockWidth}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                    >
                        {label ?
                            <label htmlFor={this.props.id}>
                                {label}
                            </label>
                            : null
                        }

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
    label: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    hasShadow: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    mask: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    status: formStatusDefault,
    hasShadow: false,
    blockWidth: inputWidthDefault,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
};

export default Input;