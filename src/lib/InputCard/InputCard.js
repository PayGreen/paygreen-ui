import React from 'react';
import PropTypes from 'prop-types';
import {
    inputHtmlTagOptions,
    inputHtmlTagDefault,
    radioSizeOptions,
    radioSizeDefault,
    colorPalletOptions,
    formStatusOptions,
    iconSizeOptions,
} from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import { InputCardBase } from './style';

const InputCard = props => {
    const { children, htmlTag, text, blockSize, ...rest } = props;

    return (
        <InputCardBase
            theme={props.theme} // not necessary, only needed for tests
            blockSize={blockSize}
        >
            <input type={htmlTag} {...rest} />

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
        </InputCardBase>
    );
};

InputCard.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(inputHtmlTagOptions)),
    blockSize: PropTypes.oneOf(Object.values(radioSizeOptions)),
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

InputCard.defaultProps = {
    htmlTag: inputHtmlTagDefault,
    blockSize: radioSizeDefault,
};

export default InputCard;
