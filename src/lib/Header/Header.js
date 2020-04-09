import React from 'react';
import { HeaderBase } from './style';

const Header = props => {
    return <HeaderBase {...props}>{props.children}</HeaderBase>;
};

export default Header;
