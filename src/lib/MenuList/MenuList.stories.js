import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeDefault,
    colorThemeOptions,
    iconSizeOptions,
    spaceOptions,
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
import MenuList from './MenuList';

const color = [
    colorThemeOptions.primary,
    colorThemeOptions.secondary,
    colorThemeOptions.tertiary,
    colorThemeOptions.quaternary,
];

storiesOf(folder.nav + folder.sub.menu + 'MenuList', module)
    .addDecorator(withKnobs)
    .add('MenuList', () => (
        <div style={{ position: 'relative' }}>
            <MenuList
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                <a href="#">
                    <MenuListItem>
                        <LeafIcon iconSize={iconSizeOptions.lg} />

                        <Link>Tree</Link>

                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas sit amet accumsan dolor. Nullam
                            fringilla quam leo.
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

                        <IconLabel colorTheme={color[1]}>
                            <OutIcon
                                iconSize={iconSizeOptions.xs}
                                marginRight={spaceOptions.xs}
                                colorTheme={color[1]}
                            />
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

                        <IconLabel colorTheme={color[2]}>
                            <OutIcon
                                iconSize={iconSizeOptions.xs}
                                marginRight={spaceOptions.xs}
                                colorTheme={color[2]}
                            />
                            Dev
                        </IconLabel>

                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas sit amet accumsan dolor.
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
            </MenuList>
        </div>
    ));
