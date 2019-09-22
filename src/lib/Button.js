import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class Button extends PureComponent {
    
    render() {
        const Div = styled.div`
            background-color: #fab1a0;
            display: inline-block;
            padding: 10px;
            color: white;
        `;

        return (
            <Div>{this.props.children}</Div>
        );
    }
}

Button.propTypes = {
    text: PropTypes.text
};

export default Button;