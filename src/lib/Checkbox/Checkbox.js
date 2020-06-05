import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { CheckboxBase } from './style';
import { CheckBoldIcon } from '../Icon/Icon';

const Checkbox = props => {
    const {
        fieldSize,
        checkboxDisabled,
        checkboxReadOnly,
        checkboxId,
        checkboxValue,
        checkboxName,
        checkboxLabel,
        isChecked,
        changed,

        ...rest
    } = props;

    return (
        <CheckboxBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            checkboxDisabled={checkboxDisabled}
            checkboxReadOnly={checkboxReadOnly}
            checkboxId={checkboxId}
            checkboxValue={checkboxValue}
            checkboxName={checkboxName}
            checkboxLabel={checkboxLabel}
            isChecked={isChecked}
            changed={changed}
        >
            <input
                {...rest}
                disabled={checkboxDisabled}
                readOnly={checkboxReadOnly}
                id={checkboxId}
                type="checkbox"
                name={checkboxName}
                value={checkboxValue}
                onChange={changed}
                checked={isChecked}
            />
            <label htmlFor={checkboxId}>
                <CheckBoldIcon
                    theme={props.theme} // not necessary, only needed for tests
                />
                {checkboxLabel}
            </label>
        </CheckboxBase>
    );
};

Checkbox.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    checkboxDisabled: PropTypes.bool,
    checkboxReadOnly: PropTypes.bool,
    checkboxId: PropTypes.string,
    checkboxValue: PropTypes.string,
    checkboxName: PropTypes.string,
    checkboxLabel: PropTypes.string,
    isChecked: PropTypes.bool,
    changed: PropTypes.func,
};

Checkbox.defaultProps = {
    fieldSize: buttonSizeDefault,
    checkboxDisabled: false,
    checkboxReadOnly: false,
    isChecked: false,
};

export default Checkbox;
