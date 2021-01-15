import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { CheckboxBase } from './style';
import { CheckBoldIcon } from '../Icon/Icon';

const Checkbox = props => {
    const { fieldSize, label, id, inputRef, ...rest } = props;

    return (
        <CheckboxBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            isDisabled={props.disabled}
            hasLabel={label && label.length > 0}
        >
            <input {...rest} ref={inputRef} id={id} type="checkbox" />

            <label htmlFor={id}>
                <CheckBoldIcon
                    theme={props.theme} // not necessary, only needed for tests
                />

                {label}
            </label>
        </CheckboxBase>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
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
