import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
} from '../../shared/constants';
import { TextareaBase } from './style';

const Textarea = ({
    theme,
    onChange,
    value,
    status,
    label,
    hasCounter,
    counterText,
    hasShadow,
    inputRef,
    marginTop,
    marginBottom,
    ...rest
}) => {
    const [stateValue, setValue] = useState(value);
    const [stateCharactersStatus, setCharactersStatus] = useState(
        formStatusDefault,
    );

    const handleChange = e => {
        setValue(e.target.value);
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
            <span>{charactersLength}</span>&nbsp;/&nbsp;{rest.maxLength}{' '}
            {counterText}
        </div>
    );

    return (
        <TextareaBase
            theme={theme} // not necessary, only needed for tests
            status={status}
            charactersStatus={stateCharactersStatus}
            inputDisabled={rest.disabled}
            inputReadOnly={rest.readOnly}
            hasShadow={hasShadow}
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            {label ? <label htmlFor={rest.id}>{label}</label> : null}

            <textarea
                {...rest}
                ref={inputRef}
                value={stateValue}
                onChange={e => {
                    handleChange(e);
                    onChange ? onChange(e) : null;
                }}
            />

            {hasCounter && !rest.disabled && !rest.readOnly
                ? charactersCountBlock
                : null}
        </TextareaBase>
    );
};

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
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

Textarea.defaultProps = {
    onChange: undefined,
    value: '',
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
