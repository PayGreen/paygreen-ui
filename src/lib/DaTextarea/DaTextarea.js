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

const DaTextarea = props => {
    const [stateValue, setValue] = useState(
        props.value !== undefined ? props.value : '',
    );
    const [stateCharactersStatus, setCharactersStatus] = useState(
        formStatusDefault,
    );

    const {
        hasCounter,
        counterText,
        marginTop,
        marginBottom,
        fieldSize,
        blockWidth,
        ...rest
    } = props;

    const handleChange = e => {
        setValue(e.target.value);
    };

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
        <DaTextareaBase
            theme={props.theme} // not necessary, only needed for tests
            charactersStatus={stateCharactersStatus}
            inputDisabled={props.disabled}
            inputReadOnly={props.readOnly}
            fieldSize={fieldSize}
            blockWidth={blockWidth}
        >
            <textarea
                {...rest}
                value={stateValue}
                onChange={e => {
                    handleChange(e);
                    props.onChange ? props.onChange(e) : null;
                }}
            />

            {hasCounter && !props.disabled && !props.readOnly
                ? charactersCountBlock
                : null}
        </DaTextareaBase>
    );
};

DaTextarea.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    hasCounter: PropTypes.bool,
    counterText: PropTypes.string,
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
};

DaTextarea.defaultProps = {
    onChange: undefined,
    minLength: 0,
    maxLength: 2000,
    hasCounter: false,
    counterText: 'characters',
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
};

export default DaTextarea;
