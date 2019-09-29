import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ButtonOutlet as BO } from '../Button/style';

class ButtonOutlet extends PureComponent {
    render() {
        return (
            <BO {...this.props}>{this.props.children}</BO>
        );
    }
}

ButtonOutlet.propTypes = {
    text: PropTypes.text
};

export default ButtonOutlet;