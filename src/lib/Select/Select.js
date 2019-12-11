import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault
} from '../../shared/constants';
import { SelectBase } from './style';

class Select extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            status: ''
        };
    }


    render() {
        const optionsHtml = this.props.options.map((option, index) =>
            <option
                key={index}
                value={option.value}
                disabled={
                    option.disabled ||
                    this.props.readOnly && option.value !== this.state.value
                }
            >
                {option.text}
            </option>
        );

        let animation = false;
        if (this.props.status !== this.state.status) {
            animation = true;
            setTimeout(() => {
                animation = false;
                this.setState({ status: this.props.status });
            }, 1);
        }

        const {
            options,
            params,
            status,
            width,
            label,
            readOnly,
            ...rest
        } = this.props;
        
        return <Transition in={animation} timeout={900}>
            {(keyframe) => {
                return (
                    <SelectBase
                        keyframe={keyframe}
                        theme={this.props.theme} // not necessary, only needed for tests
                        params={params}
                        status={status}
                        inputWidth={width}
                        inputReadOnly={readOnly}
                        inputDisabled={this.props.disabled}
                    >
                        <label htmlFor={this.props.id}>
                            {label}
                        </label>

                        <select {...rest}>
                            {optionsHtml}
                        </select>

                        <span></span>
                    </SelectBase>
                );
            }}
        </Transition>;
    }
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            disabled: PropTypes.bool
        })
    ).isRequired,
    width: PropTypes.oneOf(Object.values(inputWidthOptions)),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    params: PropTypes.shape({
        shadow: PropTypes.bool,
    }),
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
};

Select.defaultProps = {
    width: inputWidthDefault,
    params: {
        shadow: false,
    },
    onChange: undefined,
    status: formStatusDefault,
};

export default Select;