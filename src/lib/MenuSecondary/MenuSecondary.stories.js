import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    iconSizeOptions,
    alignOptions,
    colorPalletOptions
} from '../../shared/constants';
import { LockIcon, PenIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuClose from '../MenuClose/MenuClose';
import MenuSecondary from './MenuSecondary';

storiesOf('Paygreen | Menu/MenuSecondary', module).addDecorator(withKnobs)
.add('MenuSecondary', () => (
    <MenuSecondary
        isOpen={boolean('Is open', true)}
    >
        <Menu>
            <a href="#">
                <MenuItem
                    hasHoverBase={false}
                    hasHoverEmphasis={true}
                    align={alignOptions.center}
                    isMain={true}
                >
                    <LockIcon
                        iconSize={iconSizeOptions.lg}
                        colorPallet={colorPalletOptions.wab}
                    />

                    <Link
                        hasUnderline={false}
                        hasUppercase={true}
                        colorPallet={colorPalletOptions.wab}
                    >
                        Login
                    </Link>
                </MenuItem>
            </a>
        </Menu>

        <Menu>
            <a href="#">
                <MenuItem
                    hasHoverBase={false}
                    hasHoverEmphasis={true}
                    align={alignOptions.center}
                    isMain={true}
                >
                    <PenIcon
                        iconSize={iconSizeOptions.lg}
                    />

                    <Link
                        hasUnderline={false}
                        hasUppercase={true}
                    >
                        Subscribe
                    </Link>
                </MenuItem>
            </a>
        </Menu>

        <MenuClose />
    </MenuSecondary>
));