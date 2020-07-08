import React from 'react';
import { DaTableBodyBase } from './style';

const DaTableBody = props => {
    return <DaTableBodyBase {...props}>{props.children}</DaTableBodyBase>;
};

export default DaTableBody;
