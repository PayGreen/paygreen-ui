import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { CheckboxBase } from './style';
import { CheckBoldIcon } from '../Icon/Icon';

const Checkbox = ({ theme, fieldSize, label, inputRef, ...rest }) => {
    return (
        <CheckboxBase
            theme={theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            isDisabled={rest.disabled}
            hasLabel={label && label.length > 0}
        >
            <input {...rest} ref={inputRef} type="checkbox" />

            <label htmlFor={rest.id}>
                <CheckBoldIcon
                    theme={theme} // not necessary, only needed for tests
                />

                {label}
            </label>
        </CheckboxBase>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

Checkbox.defaultProps = {
    disabled: false,
    fieldSize: buttonSizeDefault,
};

export default Checkbox;
