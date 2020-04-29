import React from 'react';
import { TopBarBase } from './style';

const TopBar = props => {
    return <TopBarBase {...props}>{props.children}</TopBarBase>;
};

export default TopBar;