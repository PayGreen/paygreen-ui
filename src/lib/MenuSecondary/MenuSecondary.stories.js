import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    iconSizeOptions,
    alignOptions
} from '../../shared/constants';
import { LeafIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuSecondary from './MenuSecondary';

storiesOf('MenuSecondary', module).addDecorator(withKnobs)
.add('MenuSecondary', () => (
    <MenuSecondary
        isOpen={boolean('Is open', true)}
    >
        <Menu>
            <a href="#">
                <MenuItem
                    hoverBase={false}
                    hoverEmphasis={true}
                    align={alignOptions.center}
                    isMain={true}
                >
                    <LeafIcon
                        iconSize={iconSizeOptions.lg}
                    />

                    <Link
                        underline={false}
                        uppercase={true}
                    >
                        Login
                    </Link>
                </MenuItem>
            </a>
        </Menu>
    </MenuSecondary>
));