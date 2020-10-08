import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    itemHtmlTagOptions,
    iconSizeOptions,
    colorThemeOptions,
} from '../../shared/constants';
import { LockIcon, PenIcon } from '../Icon/Icon';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuClose from '../MenuClose/MenuClose';
import MenuSecondary from './MenuSecondary';

storiesOf(folder.nav + 'MenuSecondary', module)
    .addDecorator(withKnobs)
    .add('MenuSecondary', () => (
        <MenuSecondary
            isOpen={boolean('Is open', true)}
            closeComponent={<MenuClose />}
        >
            <Menu htmlTag={itemHtmlTagOptions.div}>
                <a href="#">
                    <MenuItem>
                        <LockIcon iconSize={iconSizeOptions.lg} />
                        Login
                    </MenuItem>
                </a>
            </Menu>

            <Menu htmlTag={itemHtmlTagOptions.div}>
                <a href="#">
                    <MenuItem colorTheme={colorThemeOptions.secondary}>
                        <PenIcon iconSize={iconSizeOptions.lg} />
                        Subscribe
                    </MenuItem>
                </a>
            </Menu>
        </MenuSecondary>
    ));
