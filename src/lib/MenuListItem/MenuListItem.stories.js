import React from 'react';
import {
    folder,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuListItemComponent from './MenuListItem';

export default {
    title: folder.nav + folder.sub.menu + 'MenuListItem',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
    },
    args: { colorTheme: colorThemeDefault },
};

export const MenuListItem = args => (
    <a href="#">
        <MenuListItemComponent colorTheme={args.colorTheme}>
            <CardsIcon
                iconSize={iconSizeOptions.lg}
                colorTheme={args.colorTheme}
            />

            <Link colorTheme={args.colorTheme}>Payment</Link>

            <IconLabel colorTheme={args.colorTheme} icon={<OutIcon />}>
                Dev
            </IconLabel>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet accumsan dolor. Nullam fringilla quam leo, id
                bibendum felis iaculis eu.
            </Text>
        </MenuListItemComponent>
    </a>
);

export const MenuListItemGrey = args => (
    <a href="#">
        <MenuListItemComponent colorTheme={args.colorTheme}>
            <CardsIcon
                colorPallet={colorPalletOptions.wab}
                iconSize={iconSizeOptions.lg}
            />

            <Link colorPallet={colorPalletOptions.wab}>Payment</Link>

            <IconLabel colorTheme={args.colorTheme} icon={<OutIcon />}>
                Dev
            </IconLabel>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet accumsan dolor. Nullam fringilla quam leo, id
                bibendum felis iaculis eu.
            </Text>
        </MenuListItemComponent>
    </a>
);
