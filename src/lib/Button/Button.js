import React, { PureComponent } from 'react';
import { Button as B } from './style';

class Button extends PureComponent {
    render() {
        return (
            <B {...this.props}>{this.props.children}</B>
        );
    }
}

export default Button;