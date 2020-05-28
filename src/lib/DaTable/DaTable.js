import React from 'react';
import { DaTableBase } from './style';

const DaTable = props => {
    return <DaTableBase {...props}>{props.children}</DaTableBase>;
};

export default DaTable;
