import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaTextareaBase } from './style';

const DaTextarea = ({
    theme,
    onChange,
    value,
    defaultValue,
    hasCounter,
    counterText,
    marginTop,
    marginBottom,
    isRounded,
    fieldSize,
    blockWidth,
    hasStaticWidth,
    inputRef,
    ...rest
}) => {
    const [stateValue, setValue] = useState(defaultValue || value);
    const [autoHeight, setAutoHeight] = useState('');
    const [stateCharactersStatus, setCharactersStatus] = useState(
        formStatusDefault,
    );

    const handleChange = e => {
        setValue(e.target.value);
        setAutoHeight(e.target.scrollHeight + 'px');
    };

    const charactersLength = stateValue.length || 0;

    useEffect(() => {
        if (charactersLength > rest.maxLength * 0.9) {
            setCharactersStatus(formStatusOptions.warning);
        } else if (charactersLength >= rest.minLength) {
            setCharactersStatus(formStatusOptions.success);
        }
    }, [charactersLength]);

    const charactersCountBlock = (
        <div>
            <span>{charactersLength}</span>&nbsp;/&nbsp;{rest.maxLength}&nbsp;
            {counterText}
        </div>
    );

    return (
        <DaTextareaBase
            theme={theme} // not necessary, only needed for tests
            charactersStatus={stateCharactersStatus}
            inputDisabled={rest.disabled}
            inputReadOnly={rest.readOnly}
            fieldSize={fieldSize}
            isRounded={isRounded}
            blockWidth={blockWidth}
            hasStaticWidth={hasStaticWidth}
            hasCounter={hasCounter}
        >
            <textarea
                {...rest}
                ref={inputRef}
                style={{height: autoHeight}}
                value={stateValue}
                onChange={e => {
                    handleChange(e);
                    onChange ? onChange(e) : null;
                }}
            />

            {hasCounter && !rest.disabled && !rest.readOnly
                ? charactersCountBlock
                : null}
        </DaTextareaBase>
    );
};

DaTextarea.propTypes = {
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    hasCounter: PropTypes.bool,
    counterText: PropTypes.string,
    isRounded: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasStaticWidth: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

DaTextarea.defaultProps = {
    onChange: undefined,
    value: '',
    disabled: false,
    readOnly: false,
    minLength: 0,
    maxLength: 2000,
    hasCounter: false,
    counterText: 'characters',
    isRounded: false,
    blockWidth: inputWidthDefault,
    hasStaticWidth: false,
    fieldSize: buttonSizeDefault,
};

export default DaTextarea;
