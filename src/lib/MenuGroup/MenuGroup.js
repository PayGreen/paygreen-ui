import React from 'react';
import { MenuGroupBase } from './style';

const MenuGroup = props => {
    return <MenuGroupBase {...props}>{props.children}</MenuGroupBase>;
};

export default MenuGroup;
