import React from 'react';
import MenuItem from './MenuItem';
import { CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import {
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

const colorThemeLabel = 'Color theme';

storiesOf('MenuItem', module)
    .addDecorator(withKnobs)
    .add('MenuItem', () => (
        <a href="#">
            <MenuItem
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                hoverEmphasis={boolean('Hover emphasis', true)}
            >
                <CardsIcon
                    iconSize={iconSizeOptions.lg}
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                />

                <Link
                    underline={false}
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                >
                    Payment
                </Link>

                <IconLabel
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                >
                    <OutIcon
                        iconSize={iconSizeOptions.xs}
                        marginRight={spaceOptions.xs}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    />
                    Dev
                </IconLabel>

                <Text
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                >
                    Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Maecenas sit amet accumsan dolor. Nullam fringilla quam leo, id bibendum felis iaculis eu.
                </Text>
            </MenuItem>
        </a>
    ));