import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions,
} from '../../shared/constants';
import Options from './Options';
import { SelectBase } from './style';

const Select = props => {
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
        inputRef,
        ...rest
    } = props;

    const [stateStatus, setStatus] = useState(status);

    let animation = false;
    if (status !== stateStatus) {
        animation = true;

        setTimeout(() => {
            animation = false;
            setStatus(status);
        }, 1);
    }

    return (
        <Transition in={animation} timeout={900}>
            {keyframe => {
                return (
                    <SelectBase
                        keyframe={keyframe}
                        theme={props.theme} // not necessary, only needed for tests
                        status={status}
                        inputReadOnly={readOnly}
                        inputDisabled={props.disabled}
                        hasShadow={hasShadow}
                        blockWidth={blockWidth}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                    >
                        {label ? (
                            <label htmlFor={props.id}>{label}</label>
                        ) : null}

                        <select {...rest} ref={inputRef}>
                            <Options
                                options={options}
                                readOnly={readOnly}
                                defaultValue={props.defaultValue}
                            />
                        </select>

                        <span></span>
                    </SelectBase>
                );
            }}
        </Transition>
    );
};

Select.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                disabled: PropTypes.bool,
            }),
            PropTypes.oneOfType([
                PropTypes.shape({
                    optgroup: PropTypes.string.isRequired,
                }),
                PropTypes.arrayOf(
                    PropTypes.shape({
                        value: PropTypes.string.isRequired,
                        text: PropTypes.string.isRequired,
                        disabled: PropTypes.bool,
                    }),
                ),
            ]),
        ]),
    ).isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    hasShadow: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

Select.defaultProps = {
    status: formStatusDefault,
    hasShadow: false,
    blockWidth: inputWidthDefault,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
};

export default Select;
