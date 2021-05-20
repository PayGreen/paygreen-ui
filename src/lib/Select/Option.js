import React from 'react';
import PropTypes from 'prop-types';

const Option = props => {
    const { option, readOnly, defaultValue } = props;

    return (
        <option
            value={option.value}
            disabled={
                option.disabled || (readOnly && option.value !== defaultValue)
            }
        >
            {option.text}
        </option>
    );
};

Option.propTypes = {
    option: PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
    }).isRequired,
    readOnly: PropTypes.bool,
};

Option.defaultProps = {
    readOnly: false,
};

export default Option;
