import React from 'react';
import { TopbarBase } from './style';

const Topbar = props => {
    return <TopbarBase {...props}>{props.children}</TopbarBase>;
};

export default Topbar;