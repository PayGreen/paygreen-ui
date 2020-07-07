import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import {
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaInputBase } from './style';

const DaInput = props => {
    const [stateMask, setMask] = useState('');
    const {
        fieldSize,
        blockWidth,
        hasHelpButton,
        type,
        // remove mask from rest
        mask,
        ...rest
    } = props;

    useEffect(() => {
        if (mask && mask.length) {
            setMask(mask);
        } else if (type === 'tel') {
            setMask('+99 (0)9 99 99 99 99');
        }
    }, [type, mask]);

    return (
        <DaInputBase
            theme={props.theme} // not necessary, only needed for tests
            type={props.type}
            inputReadOnly={props.readOnly}
            inputDisabled={props.disabled}
            fieldSize={fieldSize}
            blockWidth={blockWidth}
            hasHelpButton={hasHelpButton}
        >
            <InputMask {...rest} mask={stateMask} />
        </DaInputBase>
    );
};

DaInput.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    mask: PropTypes.string,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasHelpButton: PropTypes.bool,
};

DaInput.defaultProps = {
    type: 'text',
    disabled: false,
    readOnly: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasHelpButton: false,
};

export default DaInput;
