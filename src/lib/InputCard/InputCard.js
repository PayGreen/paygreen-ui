import React from 'react';
import PropTypes from 'prop-types';
import {
    multipleInputTypeOptions,
    multipleInputTypeDefault,
    radioSizeOptions,
    radioSizeDefault,
    colorPalletOptions,
    formStatusOptions,
    iconSizeOptions,
} from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import { InputCardBase } from './style';

const InputCard = ({ children, theme, text, blockSize, ...rest }) => {
    return (
        <InputCardBase
            theme={theme} // not necessary, only needed for tests
            blockSize={blockSize}
        >
            <input {...rest} />

            <label htmlFor={rest.id}>
                {children}

                <span className="checked">
                    <CheckBoldIcon
                        theme={theme} // not necessary, only needed for tests
                        colorPallet={colorPalletOptions.status}
                        colorStatus={formStatusOptions.success}
                        iconSize={iconSizeOptions.xs}
                    />
                </span>

                {text}
            </label>
        </InputCardBase>
    );
};

InputCard.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.oneOf(Object.values(multipleInputTypeOptions)),
    blockSize: PropTypes.oneOf(Object.values(radioSizeOptions)),
};

InputCard.defaultProps = {
    type: multipleInputTypeDefault,
    blockSize: radioSizeDefault,
};

export default InputCard;
