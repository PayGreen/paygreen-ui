import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    radioSizeOptions,
    radioSizeDefault,
    colorPalletOptions,
    formStatusOptions,
    iconSizeOptions
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
            theme={this.props.theme} // not necessary, only needed for tests
        >
            <input type="radio" {...rest} />

            <label htmlFor={this.props.id}>
                {children}

                <span className="checked">
                    <CheckBoldIcon
                        colorPallet={colorPalletOptions.status}
                        colorStatus={formStatusOptions.success}
                        iconSize={iconSizeOptions.xs}
                        theme={this.props.theme} // not necessary, only needed for tests
                    />
                </span>

                {text}
            </label>
        </RadioIconBase>;
    }
}

RadioIcon.propTypes = {
    blockSize: PropTypes.oneOf(Object.values(radioSizeOptions)),
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

RadioIcon.defaultProps = {
    blockSize: radioSizeDefault,
};

export default RadioIcon;