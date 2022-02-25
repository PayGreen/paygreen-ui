import React, { useState } from 'react';
import { folder } from '../../shared/constants';
import DaTableCell from '../DaTableCell/DaTableCell';
import Checkbox from '../Checkbox/Checkbox';
import DaTableRow from './DaTableRow';

export default {
    title: folder.table + folder.sub.daTable + 'DaTableRow',
};

export const TableRow = ({ text, ...args }) => {
    const [isActive, setActive] = useState(false);

    return (
        <DaTableRow isActive={isActive}>
            <DaTableCell>
                <Checkbox
                    id="select"
                    onChange={() => setActive(!isActive)}
                    checked={isActive}
                />
            </DaTableCell>

            <DaTableCell isId={true}>3456</DaTableCell>

            <DaTableCell isMain={false} label="Date">
                27/05/2020
            </DaTableCell>

            <DaTableCell>Marie Perez</DaTableCell>

            <DaTableCell>34.56&nbsp;€</DaTableCell>

            <DaTableCell isMain={false} label="Type">
                Cash
            </DaTableCell>

            <DaTableCell isMain={false} label="A very long label">
                <span>A very long content without bold</span>
            </DaTableCell>
        </DaTableRow>
    );
};
