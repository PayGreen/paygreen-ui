import React, { PureComponent } from 'react';
import { ButtonGroupBase } from './style';

class ButtonGroup extends PureComponent {
    render() {
        return <ButtonGroupBase {...this.props}>{this.props.children}</ButtonGroupBase>;
    }
}

export default ButtonGroup;