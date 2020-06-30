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
        fieldSize,
        blockWidth,
        hasHelpButton,
        // must not be passed with rest because there is no readOnly html attribute for select
        readOnly,
        ...rest
    } = props;

    return (
        <DaSelectBase
            theme={props.theme} // not necessary, only needed for tests
            inputReadOnly={readOnly}
            inputDisabled={props.disabled}
            blockWidth={blockWidth}
            fieldSize={fieldSize}
            hasHelpButton={hasHelpButton}
        >
            <select {...rest}>
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}
                        disabled={option.disabled || props.readOnly}
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
    required: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasHelpButton: PropTypes.bool,
};

DaSelect.defaultProps = {
    disabled: false,
    readOnly: false,
    required: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasHelpButton: false,
};

export default DaSelect;
