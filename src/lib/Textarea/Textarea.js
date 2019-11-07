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

        if (this.state.characters > this.props.maxLength * 0.9) {
            this.state.charactersStatus = formStatusOptions.warning;
        } else if (this.state.characters >= this.props.minLength) {
            this.state.charactersStatus = formStatusOptions.success;
        } else {
            this.state.charactersStatus = formStatusOptions.default;
        }
    }

    render() {
        this.characterCount(this.state.value);

        const charactersCountBlock = <div>
            <span>
                {this.state.characters}
            </span>&nbsp;/&nbsp;{this.props.maxLength} {this.props.counterlabel}
        </div>;

        return <TextareaBase
            theme={this.props.theme} // not necessary, only needed for tests
            params={this.props.params}
            status={this.props.status}
            state={this.state}
            disabled={this.props.disabled}
        >
            <label htmlFor={this.props.id}>
                {this.props.label}
            </label>

            <textarea
                {...this.props}
                value={this.state.value}
                onChange={this.handleChange}
            />
            
            {this.props.params.counter && !this.props.disabled ? charactersCountBlock : ''}
        </TextareaBase>;
    }
}

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    name: PropTypes.string,
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