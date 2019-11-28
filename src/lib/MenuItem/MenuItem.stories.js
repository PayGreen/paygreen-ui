import React from 'react';
import MenuItem from './MenuItem';
import { CardsIcon, OutIcon } from '../Icon/Icon';
import Link from '../Link/Link';
import IconLabel from '../IconLabel/IconLabel';
import Text from '../Text/Text';
import {
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('MenuItem', module)
    .addDecorator(withKnobs)
    .add('MenuItem', () => (
        <a href="#">
            <MenuItem
                
            >
                <CardsIcon
                    iconSize={iconSizeOptions.lg}
                />

                <Link underline={false}>
                    Payment
                </Link>

                <IconLabel>
                    <OutIcon
                        iconSize={iconSizeOptions.xs}
                        marginRight={spaceOptions.xs}
                    />
                    Dev
                </IconLabel>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet accumsan dolor. Nullam fringilla quam leo, id bibendum felis iaculis eu.
                </Text>
            </MenuItem>
        </a>
    ));