import React from 'react';
import { folder, spaceOptions } from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import cb from './sample/sample.svg';
import TableCell from './TableCell';

export default {
    title: folder.table + folder.sub.table + 'TableCell',
};

export const CellWithLogo = args => {
    return (
        <TableCell>
            <Logo blockHeight={spaceOptions.xs} blockWidth={spaceOptions.sm}>
                <img src={cb} alt="logo" />
            </Logo>

            <span>
                Sample text <i>(more text)</i>
            </span>
        </TableCell>
    );
};
export const CellWithLink = args => {
    return (
        <TableCell>
            <a href="#">
                <Link>Contact us</Link>
            </a>
        </TableCell>
    );
};
export const CellWithicon = args => {
    return (
        <TableCell>
            <CheckBoldIcon hasBackground={true} />
        </TableCell>
    );
};
