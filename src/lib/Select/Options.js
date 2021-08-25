import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ options, readOnly, defaultValue }) => {
    if (!options || !options.length) {
        return null;
    }

    return options.map((option, index) =>
        option.optgroup ? (
            <optgroup label={option.optgroup} key={index}>
                {option.values.map((subOption, index) => (
                    <option
                        key={index}
                        value={subOption.value}
                        disabled={
                            subOption.disabled ||
                            (readOnly && subOption.value !== defaultValue)
                        }
                    >
                        {subOption.text}
                    </option>
                ))}
            </optgroup>
        ) : (
            <option
                key={index}
                value={option.value}
                disabled={
                    option.disabled ||
                    (readOnly && option.value !== defaultValue)
                }
            >
                {option.text}
            </option>
        ),
    );
};

Options.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.any.isRequired,
                text: PropTypes.string.isRequired,
                disabled: PropTypes.bool,
            }),
            PropTypes.oneOfType([
                PropTypes.shape({
                    optgroup: PropTypes.string.isRequired,
                }),
                PropTypes.arrayOf(
                    PropTypes.shape({
                        value: PropTypes.any.isRequired,
                        text: PropTypes.string.isRequired,
                        disabled: PropTypes.bool,
                    }),
                ),
            ]),
        ]),
    ).isRequired,
    readOnly: PropTypes.bool,
    defaultValue: PropTypes.any,
};

Options.defaultProps = {
    readOnly: false,
    defaultValue: '',
};

export default Options;
