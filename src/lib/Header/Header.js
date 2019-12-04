import React, { PureComponent } from 'react';
import { HeaderBase } from './style';

class Header extends PureComponent {
    render() {
        return <HeaderBase
            {...this.props}
        >
            {this.props.children}
        </HeaderBase>;
    }
}

export default Header;