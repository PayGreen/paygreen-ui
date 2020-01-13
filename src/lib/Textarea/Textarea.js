import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    spaceOptions
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
            status,
            label,
            hasCounter,
            counterText,
            hasShadow,
            marginTop,
            marginBottom,
            ...rest
        } = this.props;

        const charactersLength = this.state.value.length || 0;
        let charactersStatus = formStatusOptions.default;

        if (charactersLength > this.props.maxLength * 0.9) {
            charactersStatus = formStatusOptions.warning;
        } else if (charactersLength >= this.props.minLength) {
            charactersStatus = formStatusOptions.success;
        }

        const charactersCountBlock = <div>
            <span>
                {charactersLength}
            </span>&nbsp;/&nbsp;{this.props.maxLength} {counterText}
        </div>;

        return <TextareaBase
            theme={this.props.theme} // not necessary, only needed for tests
            status={status}
            charactersStatus={charactersStatus}
            inputDisabled={this.props.disabled}
            inputReadOnly={this.props.readOnly}
            hasShadow={hasShadow}
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            {label ?
                <label htmlFor={this.props.id}>
                    {label}
                </label>
                : null
            }

            <textarea
                {...rest}
                value={this.state.value}
                onChange={(e) => {
                    this.handleChange(e);
                    this.props.onChange ? this.props.onChange(e) : null;
                }}
            />

            {hasCounter && !this.props.disabled && !this.props.readOnly ?
                charactersCountBlock : null}
        </TextareaBase>;
    }
}

Textarea.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    hasCounter: PropTypes.bool,
    counterText: PropTypes.string,
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    hasShadow: PropTypes.bool,
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Textarea.defaultProps = {
    onChange: undefined,
    minLength: 0,
    maxLength: 2000,
    hasCounter: false,
    counterText: 'characters',
    status: formStatusDefault,
    hasShadow: false,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
};

export default Textarea;