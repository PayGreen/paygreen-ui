import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorOptions,
    colorDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    typeOptions,
    typeDefault
} from '../../shared/const';
import {
    ButtonFill,
    ButtonLine,
    ButtonFillReverse,
    ButtonLineReverse,
    ButtonFillDisabled,
    ButtonLineDisabled
} from './style';

class Button extends PureComponent {
    render() {
        if (this.props.disabled) {
            if (this.props.template === 'line') {
                return <ButtonLineDisabled {...this.props}>{this.props.children}</ButtonLineDisabled>;
            }
            
            return <ButtonFillDisabled {...this.props}>{this.props.children}</ButtonFillDisabled>;
        } else if (this.props.type === 'reverse') {
            if (this.props.template === 'line') {
                return <ButtonLineReverse {...this.props}>{this.props.children}</ButtonLineReverse>;
            }
            
            return <ButtonFillReverse {...this.props}>{this.props.children}</ButtonFillReverse>;
        } else {
            // Case of this.props.type === 'original'
            if (this.props.template === 'line') {
                return <ButtonLine {...this.props}>{this.props.children}</ButtonLine>;
            }
            
            return <ButtonFill {...this.props}>{this.props.children}</ButtonFill>;
        }
    }
}

Button.propTypes = {
    template: PropTypes.oneOf(['fill', 'line']),
    type: PropTypes.oneOf(Object.values(typeOptions)),
    color: PropTypes.oneOf(Object.values(colorOptions)),
    size: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    template: 'fill',
    type: typeDefault,
    color: colorDefault,
    size: buttonSizeDefault,
    disabled: false,
};

export default Button;