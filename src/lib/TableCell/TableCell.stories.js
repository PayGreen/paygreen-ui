import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { spaceOptions } from '../../shared/constants';
import {
    CheckBoldIcon
} from '../Icon/Icon';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import TableCell from './TableCell';
import cb from './sample/sample.svg';

storiesOf('TableCell', module).addDecorator(withKnobs)
.add('Cell with logo', () => (
    <TableCell>
        <Logo blockHeight={spaceOptions.xs} blockWidth={spaceOptions.sm}>
            <img src={cb} alt="logo" />
        </Logo>
        
        <span>
            Sample text <i>(more text)</i>
        </span>
    </TableCell>
))
.add('Cell with link', () => (
    <TableCell>
        <a href="#">
            <Link>
                Contact us
            </Link>
        </a>
    </TableCell>
))
.add('Cell with Icon', () => (
    <TableCell>
        <CheckBoldIcon
            hasBackground={true}
        />
    </TableCell>
));