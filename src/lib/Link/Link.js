import React, { PureComponent } from 'react';
import { LinkBase } from './style';

class Link extends PureComponent {
    render() {
        return <LinkBase {...this.props}>{this.props.children}</LinkBase>;
    }
}

export default Link;