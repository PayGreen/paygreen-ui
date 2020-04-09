import React from 'react';
import PropTypes from 'prop-types';
import {
    radioSizeOptions,
    radioSizeDefault,
    colorPalletOptions,
    formStatusOptions,
    iconSizeOptions,
} from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import { RadioIconBase } from './style';

const RadioIcon = props => {
    const { children, text, blockSize, ...rest } = props;

    return (
        <RadioIconBase
            theme={props.theme} // not necessary, only needed for tests
            blockSize={blockSize}
        >
            <input type="radio" {...rest} />

            <label htmlFor={props.id}>
                {children}

                <span className="checked">
                    <CheckBoldIcon
                        theme={props.theme} // not necessary, only needed for tests
                        colorPallet={colorPalletOptions.status}
                        colorStatus={formStatusOptions.success}
                        iconSize={iconSizeOptions.xs}
                    />
                </span>

                {text}
            </label>
        </RadioIconBase>
    );
};

RadioIcon.propTypes = {
    blockSize: PropTypes.oneOf(Object.values(radioSizeOptions)),
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

RadioIcon.defaultProps = {
    blockSize: radioSizeDefault,
};

export default RadioIcon;
