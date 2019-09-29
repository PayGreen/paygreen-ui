import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button as B } from './style';

class Button extends PureComponent {
    render() {
        return (
            <B {...this.props}>{this.props.children}</B>
        );
    }
}

Button.propTypes = {
    text: PropTypes.text
};

export default Button;