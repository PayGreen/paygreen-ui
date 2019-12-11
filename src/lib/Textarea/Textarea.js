import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { TextareaBase } from './style';

class Textarea extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value !== undefined ? props.value : '',
            charactersStatus: formStatusOptions.default
        };

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const {
            params,
            status,
            label,
            counterlabel,
            ...rest
        } = this.props;

        const lengthCharacters = this.state.value.length || 0;
        let charactersStatus = formStatusOptions.default;
        if (lengthCharacters > this.props.maxLength * 0.9) {
            charactersStatus = formStatusOptions.warning;
        } else if (lengthCharacters >= this.props.minLength) {
            charactersStatus = formStatusOptions.success;
        }

        const charactersCountBlock = <div>
            <span>
                {this.state.value ? this.state.value.length : 0}
            </span>&nbsp;/&nbsp;{this.props.maxLength} {counterlabel}
        </div>;

        return <TextareaBase
            theme={this.props.theme} // not necessary, only needed for tests
            params={params}
            status={status}
            charactersStatus={charactersStatus}
            inputDisabled={this.props.disabled}
            inputReadOnly={this.props.readOnly}
        >
            <label htmlFor={this.props.id}>
                {this.props.label}
            </label>

            <textarea
                {...rest}
                value={this.state.value}
                onChange={(e) => {
                    this.handleChange(e);
                    this.props.onChange ? this.props.onChange(e) : null
                }}
            />

            {params.counter && !this.props.disabled && !this.props.readOnly ?
                charactersCountBlock : null}
        </TextareaBase>;
    }
}

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    params: PropTypes.shape({
        shadow: PropTypes.bool,
        counter: PropTypes.bool
    }),
    counterlabel: PropTypes.string,
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
};

Textarea.defaultProps = {
    minLength: 0,
    maxLength: 2000,
    params: {
        shadow: false,
        counter: false
    },
    counterlabel: 'characters',
    status: formStatusDefault,
    onChange: undefined,

};

export default Textarea;