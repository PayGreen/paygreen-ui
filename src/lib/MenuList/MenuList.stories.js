import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeDefault,
    colorThemeOptions,
    iconSizeOptions,
    spaceOptions,
} from '../../shared/constants';
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
import MenuItem from '../MenuItem/MenuItem';
import MenuList from './MenuList';

const color = [
    colorThemeOptions.primary,
    colorThemeOptions.secondary,
    colorThemeOptions.tertiary,
    colorThemeOptions.quaternary,
];

storiesOf(folder.template + folder.sub.menu + 'MenuList', module)
    .addDecorator(withKnobs)
    .add('MenuList', () => (
        <MenuList
            colorTheme={radios(
                'Shadow color',
                colorThemeOptions,
                colorThemeDefault,
            )}
        >
            <a href="#">
                <MenuItem hasHoverEmphasis={true}>
                    <LeafIcon iconSize={iconSizeOptions.lg} />

                    <Link hasUnderline={false} hasHover={false}>
                        Tree
                    </Link>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet accumsan dolor. Nullam fringilla quam
                        leo.
                    </Text>
                </MenuItem>
            </a>

            <a href="#">
                <MenuItem colorTheme={color[1]} hasHoverEmphasis={true}>
                    <CardsIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={color[1]}
                    />

                    <Link
                        hasUnderline={false}
                        hasHover={false}
                        colorTheme={color[1]}
                    >
                        Payment
                    </Link>

                    <IconLabel colorTheme={color[1]}>
                        <OutIcon
                            iconSize={iconSizeOptions.xs}
                            marginRight={spaceOptions.xs}
                            colorTheme={color[1]}
                        />
                        Dev
                    </IconLabel>
                </MenuItem>
            </a>

            <a href="#">
                <MenuItem colorTheme={color[2]} hasHoverEmphasis={true}>
                    <MealIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={color[2]}
                    />

                    <Link
                        hasUnderline={false}
                        hasHover={false}
                        colorTheme={color[2]}
                    >
                        Lunchkit
                    </Link>

                    <IconLabel colorTheme={color[2]}>
                        <OutIcon
                            iconSize={iconSizeOptions.xs}
                            marginRight={spaceOptions.xs}
                            colorTheme={color[2]}
                        />
                        Dev
                    </IconLabel>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas sit amet accumsan dolor.
                    </Text>
                </MenuItem>
            </a>

            <a href="#">
                <MenuItem colorTheme={color[3]} hasHoverEmphasis={true}>
                    <OrganizationIcon
                        iconSize={iconSizeOptions.lg}
                        colorTheme={color[3]}
                    />

                    <Link
                        hasUnderline={false}
                        hasHover={false}
                        colorTheme={color[3]}
                    >
                        Rounding
                    </Link>
                </MenuItem>
            </a>
        </MenuList>
    ));
