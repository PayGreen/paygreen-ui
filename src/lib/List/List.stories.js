import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    listStyleOptions,
    colorThemeOptions,
    colorThemeDefault,
    blockSpaceOptions,
    blockSpaceDefault,
    iconSizeOptions,
    iconSizeDefault
} from '../../shared/constants';
import {
    LeafIcon,
    CardsIcon,
    OrganizationIcon,
    MealIcon,
    CheckBoldIcon
} from '../Icon/Icon';
import Text from '../Text/Text';
import Title from '../Title/Title';
import List from './List';

const colorThemeLabel = 'Color theme';

storiesOf('List', module).addDecorator(withKnobs)
.add('List with icons', () => (
    <List
        listStyle={listStyleOptions.icon}
        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
        isClickable={boolean('Is clickable', true)}
        bulletSize={select('Bullet size', iconSizeOptions, iconSizeDefault)}
        marginLateral={select('Lateral margins', blockSpaceOptions, blockSpaceDefault)}
        marginTop={select('Margin top', blockSpaceOptions, blockSpaceDefault)}
        marginBottom={select('Margin bottom', blockSpaceOptions, blockSpaceDefault)}
    >
        <>
            <LeafIcon colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)} />

            <Title colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}>
                First content
            </Title>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </>

        <>
            <CardsIcon colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)} />

            <Title colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}>
                Second content
            </Title>

            <Text>
                Lorem ipsum dolor sit amet.
            </Text>
        </>

        <>
            <OrganizationIcon colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)} />

            <Title colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}>
                Third content
            </Title>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.
            </Text>
        </>

        <>
            <MealIcon colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)} />

            <Title colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}>
                Fourth content
            </Title>

            <Text>
                Lorem ipsum dolor sit amet consectetur.
            </Text>
        </>
    </List>
))
.add('List with check', () => (
    <List
        listStyle={listStyleOptions.icon}
        isClickable={boolean('Is clickable', false)}
        bulletSize={select('Bullet size', iconSizeOptions, iconSizeDefault)}
    >
        <>
            <CheckBoldIcon />

            <Text>
                First content
            </Text>
        </>

        <>
            <CheckBoldIcon />

            <Text>
                Second content
            </Text>
        </>

        <>
            <CheckBoldIcon />

            <Text>
                Third content
            </Text>
        </>

        <>
            <CheckBoldIcon />

            <Text>
                Fourth content
            </Text>
        </>
    </List>
))
.add('List with dash', () => (
    <List
        listStyle={listStyleOptions.dash}
        colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
        isClickable={boolean('Is clickable', false)}
        bulletSize={select('Bullet size', iconSizeOptions, iconSizeDefault)}
    >
        <Text>
            First content
        </Text>


        <Text>
            Second content
        </Text>


        <Text>
            Third content
        </Text>


        <Text>
            Fourth content
        </Text>
    </List>
))
.add('List with numbers', () => (
    <List
        listStyle={listStyleOptions.number}
        colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
        isClickable={boolean('Is clickable', false)}
        bulletSize={select('Bullet size', iconSizeOptions, iconSizeDefault)}
    >
        <Text>
            First content
        </Text>


        <Text>
            Second content
        </Text>


        <Text>
            Third content
        </Text>


        <Text>
            Fourth content
        </Text>
    </List>
));