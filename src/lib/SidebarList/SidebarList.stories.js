import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeDefault,
    colorThemeOptions,
    spaceOptions,
    colorPalletOptions,
    greyOptions
} from '../../shared/constants';
import Link from '../Link/Link';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarList from './SidebarList';

const color = [
    colorThemeOptions.primary,
    colorThemeOptions.secondary,
    colorThemeOptions.tertiary,
    colorThemeOptions.quaternary,
];

storiesOf(folder.nav + 'SidebarList', module)
    .addDecorator(withKnobs)
    .add('SidebarList', () => (
        <SidebarList 
        >
            <a href="#">
                <SidebarItem textSize='sm' hasHoverEmphasis={true}>
                    <Link hasUnderline={false} hasHover={false}>
                        Tree
                    </Link>
                </SidebarItem>
            </a>

            <a href="#">
                <SidebarItem 
                        colorWab={greyOptions.grey40} textSize='sm' hasHoverEmphasis={true}>
                    <Link hasUnderline={false} hasHover={false}>
                        Tree
                    </Link>
                </SidebarItem>
            </a>

            <a href="#">
                <SidebarItem  textSize='sm' hasHoverEmphasis={true}>
                    <Link hasUnderline={false} hasHover={false}>
                        Tree
                    </Link>
                </SidebarItem>
            </a>
        </SidebarList>
    ));
