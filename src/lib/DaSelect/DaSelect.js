import React from 'react';
import PropTypes from 'prop-types';
import {
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaSelectBase } from './style';

const DaSelect = props => {
    const {
        options,
        isRounded,
        fieldSize,
        blockWidth,
        hasHelpButton,
        // must not be passed with rest because there is no readOnly html attribute for select
        readOnly,
        inputRef,
        ...rest
    } = props;

    return (
        <DaSelectBase
            theme={props.theme} // not necessary, only needed for tests
            inputReadOnly={readOnly}
            inputDisabled={props.disabled}
            isRounded={isRounded}
            blockWidth={blockWidth}
            fieldSize={fieldSize}
            hasHelpButton={hasHelpButton}
        >
            <select {...rest} ref={inputRef}>
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}
                        disabled={
                            option.disabled ||
                            (props.readOnly &&
                                option.value !== props.defaultValue)
                        }
                    >
                        {option.text}
                    </option>
                ))}
            </select>
        </DaSelectBase>
    );
};

DaSelect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        }),
    ).isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    isRounded: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasHelpButton: PropTypes.bool,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

DaSelect.defaultProps = {
    disabled: false,
    readOnly: false,
    isRounded: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasHelpButton: false,
};

export default DaSelect;
