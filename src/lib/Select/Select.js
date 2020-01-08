import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions
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
        const {
            options,
            status,
            label,

            // must not be passed with rest because there is no readOnly html attribute for select
            readOnly,

            hasShadow,
            blockWidth,
            marginTop,
            marginBottom,
            ...rest
        } = this.props;

        let animation = false;
        if (this.props.status !== this.state.status) {
            animation = true;

            setTimeout(() => {
                animation = false;
                this.setState({ status: this.props.status });
            }, 1);
        }
        
        return <Transition in={animation} timeout={900}>
            {(keyframe) => {
                return (
                    <SelectBase
                        keyframe={keyframe}
                        theme={this.props.theme} // not necessary, only needed for tests
                        status={status}
                        inputReadOnly={readOnly}
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

                        <select {...rest}>
                            {options.map((option, index) =>
                                <option
                                    key={index}
                                    value={option.value}
                                    disabled={
                                        option.disabled ||
                                        this.props.readOnly
                                            && option.value !== this.state.value
                                    }
                                >
                                    {option.text}
                                </option>
                            )}
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
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            disabled: PropTypes.bool
        })
    ).isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    hasShadow: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Select.defaultProps = {
    onChange: undefined,
    status: formStatusDefault,
    hasShadow: false,
    blockWidth: inputWidthDefault,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
};

export default Select;