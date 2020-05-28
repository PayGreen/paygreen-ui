import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaSelectBase } from './style';

class DaSelect extends PureComponent {
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
            fieldSize,
            hasHelpButton,
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
                    <DaSelectBase
                        keyframe={keyframe}
                        theme={this.props.theme} // not necessary, only needed for tests
                        status={status}
                        inputReadOnly={readOnly}
                        inputDisabled={this.props.disabled}
                        hasShadow={hasShadow}
                        blockWidth={blockWidth}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                        fieldSize={fieldSize}
                        hasHelpButton={hasHelpButton}
                    >
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
                    </DaSelectBase>
                );
            }}
        </Transition>;
    }
}

DaSelect.propTypes = {
    id: PropTypes.string,
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
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    hasHelpButton: PropTypes.bool,
};

DaSelect.defaultProps = {
    status: formStatusDefault,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
    fieldSize: buttonSizeDefault,
    hasHelpButton: false,
};

export default DaSelect;