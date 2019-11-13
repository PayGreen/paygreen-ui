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
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    characterCount(value) {
        if (value !== undefined && !isNaN(value.length)) {
            this.state.characters = value.length;
        } else {
            this.state.characters = 0;
        }

        // State = warning when characters reach the 90% of maxLength
        if (this.state.characters > this.props.maxLength * 0.9) {
            this.state.charactersStatus = formStatusOptions.warning;
        } else if (this.state.characters >= this.props.minLength) {
            this.state.charactersStatus = formStatusOptions.success;
        } else {
            this.state.charactersStatus = formStatusOptions.default;
        }
    }

    render() {
        const {
            params,
            status,
            label,
            counterlabel,
            ...rest
        } = this.props;

        this.characterCount(this.state.value);

        const charactersCountBlock = <div>
            <span>
                {this.state.characters}
            </span>&nbsp;/&nbsp;{this.props.maxLength} {counterlabel}
        </div>;

        return <TextareaBase
            theme={this.props.theme} // not necessary, only needed for tests
            params={params}
            status={status}
            state={this.state}
            inputDisabled={this.props.disabled}
            inputReadOnly={this.props.readOnly}
        >
            <label htmlFor={this.props.id}>
                {this.props.label}
            </label>

            <textarea
                {...rest}
                value={this.state.value}
                onChange={this.handleChange}
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
};

export default Textarea;