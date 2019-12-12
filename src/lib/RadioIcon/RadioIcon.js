import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    radioSizeOptions,
    radioSizeDefault,
    colorPalletOptions,
    formStatusOptions
} from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import { RadioIconBase } from './style';

class RadioIcon extends PureComponent {
    render() {
        const {
            children,
            text,
            blockSize,
            ...rest
        } = this.props;

        return <RadioIconBase
            blockSize={blockSize}
        >
            {children}

            <input type="radio" {...rest} />

            <label htmlFor={this.props.id}>
                <span>
                    <CheckBoldIcon
                        colorPallet={colorPalletOptions.status}
                        colorStatus={formStatusOptions.success}
                    />
                </span>

                {text}
            </label>
        </RadioIconBase>;
    }
}

RadioIcon.propTypes = {
    blockSize: PropTypes.oneOf(Object.values(radioSizeOptions)),
    text: PropTypes.string.isRequired
};

RadioIcon.defaultProps = {
    blockSize: radioSizeDefault,
};

export default RadioIcon;