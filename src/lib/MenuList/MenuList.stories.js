import React from 'react';
import {
    folder,
    colorThemeDefault,
    colorThemeOptions,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import {
    LeafIcon,
    CardsIcon,
    MealIcon,
    OrganizationIcon,
    OutIcon,
} from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import MenuListItem from '../MenuListItem/MenuListItem';
import MenuListComponent from './MenuList';

const color = [
    colorThemeOptions.primary,
    colorThemeOptions.secondary,
    colorThemeOptions.tertiary,
    colorThemeOptions.quaternary,
];

export default {
    title: folder.nav + folder.sub.menu + 'MenuList',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
    },
};

export const MenuList = args => (
    <div style={{ position: 'relative' }}>
        <MenuListComponent {...args}>
            <a href="#">
                <MenuListItem>
                    <LeafIcon iconSize={iconSizeOptions.lg} />

                    <Link>Tree</Link>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet accumsan dolor. Nullam fringilla quam
                        leo.
                    </Text>
                </MenuListItem>
            </a>

            <a href="#">
                <MenuListItem colorTheme={color[1]}>
                    <CardsIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={color[1]}
                    />

                    <Link colorTheme={color[1]}>Payment</Link>

                    <IconLabel colorTheme={color[1]} icon={<OutIcon />}>
                        Dev
                    </IconLabel>
                </MenuListItem>
            </a>

            <a href="#">
                <MenuListItem colorTheme={color[2]}>
                    <MealIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={color[2]}
                    />

                    <Link colorTheme={color[2]}>Lunchkit</Link>

                    <IconLabel colorTheme={color[2]} icon={<OutIcon />}>
                        Dev
                    </IconLabel>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet accumsan dolor.
                    </Text>
                </MenuListItem>
            </a>

            <a href="#">
                <MenuListItem colorTheme={color[3]}>
                    <OrganizationIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={color[3]}
                    />

                    <Link colorTheme={color[3]}>Rounding</Link>
                </MenuListItem>
            </a>
        </MenuListComponent>
    </div>
);

MenuList.args = {
    colorTheme: colorThemeDefault,
};
