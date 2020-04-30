import React from 'react';
import { MainBase } from './style';

const Main = props => {
    return <MainBase {...props}>{props.children}</MainBase>;
};

export default Main;