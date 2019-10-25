import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ButtonLine } from '../Button/style';

class ButtonOutlet extends PureComponent {
    render() {
        return (
            <ButtonLine {...this.props}>{this.props.children}</ButtonLine>
        );
    }
}

ButtonOutlet.propTypes = {
    text: PropTypes.text
};

export default ButtonOutlet;