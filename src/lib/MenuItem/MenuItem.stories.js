import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { LinkIcon } from '../Icon/Icon';
import MenuItem from './MenuItem';

storiesOf(folder.nav + folder.sub.menu + 'MenuItem', module)
    .addDecorator(withKnobs)
    .add('MenuItem', () => (
        <a href="#">
            <MenuItem
                isClickable={boolean('Is clickable', true)}
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                {boolean('Width icon (mobile only)', false) ? (
                    <LinkIcon iconSize={iconSizeOptions.lg} />
                ) : (
                    <></> //to replace 'null' value and avoid error from storybook
                )}
                Payment link
            </MenuItem>
        </a>
    ));
