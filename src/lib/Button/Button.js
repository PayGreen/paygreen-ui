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
        switch (this.props.type) {   
            case 'reverse':
                if (this.props.template == 'line') {
                    return <ButtonLineReverse {...this.props}>{this.props.children}</ButtonLineReverse>;
                } else {
                    return <ButtonFillReverse {...this.props}>{this.props.children}</ButtonFillReverse>;
                }

            case 'disabled':
                if (this.props.template == 'line') {
                    return <ButtonLineDisabled {...this.props}>{this.props.children}</ButtonLineDisabled>;
                } else {
                    return <ButtonFillDisabled {...this.props}>{this.props.children}</ButtonFillDisabled>;
                }
            
            case 'original':
            default:
                if (this.props.template == 'line') {
                    return <ButtonLine {...this.props}>{this.props.children}</ButtonLine>;
                } else {
                    return <ButtonFill {...this.props}>{this.props.children}</ButtonFill>;
                }
        }
    }
}

export default Button;