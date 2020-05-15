import React from 'react';
import { LayoutBase } from './style';

const Layout = props => {
    return <LayoutBase {...props}>{props.children}</LayoutBase>;
};

export default Layout;
