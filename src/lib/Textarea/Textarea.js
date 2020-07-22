import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
} from '../../shared/constants';
import { TextareaBase } from './style';

const Textarea = React.forwardRef((props, ref) => {
    const [stateValue, setValue] = useState(
        props.value !== undefined ? props.value : '',
    );
    const [stateCharactersStatus, setCharactersStatus] = useState(
        formStatusDefault,
    );

    const handleChange = e => {
        setValue(e.target.value);
    };

    const {
        status,
        label,
        hasCounter,
        counterText,
        hasShadow,
        marginTop,
        marginBottom,
        ...rest
    } = props;

    const charactersLength = stateValue.length || 0;

    useEffect(() => {
        if (charactersLength > props.maxLength * 0.9) {
            setCharactersStatus(formStatusOptions.warning);
        } else if (charactersLength >= props.minLength) {
            setCharactersStatus(formStatusOptions.success);
        }
    }, [charactersLength]);

    const charactersCountBlock = (
        <div>
            <span>{charactersLength}</span>&nbsp;/&nbsp;{props.maxLength}{' '}
            {counterText}
        </div>
    );

    return (
        <TextareaBase
            theme={props.theme} // not necessary, only needed for tests
            status={status}
            charactersStatus={stateCharactersStatus}
            inputDisabled={props.disabled}
            inputReadOnly={props.readOnly}
            hasShadow={hasShadow}
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            {label ? <label htmlFor={props.id}>{label}</label> : null}

            <textarea
                {...rest}
                ref={ref}
                value={stateValue}
                onChange={e => {
                    handleChange(e);
                    props.onChange ? props.onChange(e) : null;
                }}
            />

            {hasCounter && !props.disabled && !props.readOnly
                ? charactersCountBlock
                : null}
        </TextareaBase>
    );
});

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
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
    ]),
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
