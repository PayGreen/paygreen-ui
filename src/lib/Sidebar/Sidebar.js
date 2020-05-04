import React from 'react';
import { SidebarBase } from './style';

const Sidebar = props => {
    return <SidebarBase {...props}>{props.children}</SidebarBase>;
};

export default Sidebar;