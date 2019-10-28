import React, { PureComponent } from 'react';
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
            } else {
                return <ButtonFillDisabled {...this.props}>{this.props.children}</ButtonFillDisabled>;
            }
        } else if (this.props.type === 'reverse') {
            if (this.props.template === 'line') {
                return <ButtonLineReverse {...this.props}>{this.props.children}</ButtonLineReverse>;
            } else {
                return <ButtonFillReverse {...this.props}>{this.props.children}</ButtonFillReverse>;
            }
        } else {
            // this.props.type === 'original
            if (this.props.template === 'line') {
                return <ButtonLine {...this.props}>{this.props.children}</ButtonLine>;
            } else {
                return <ButtonFill {...this.props}>{this.props.children}</ButtonFill>;
            }
        }
    }
}

export default Button;