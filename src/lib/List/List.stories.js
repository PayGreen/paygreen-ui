import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    listStyleOptions,
    listStyleDefault,
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import { LeafIcon, CardsIcon, OrganizationIcon, MealIcon } from '../Icon/Icon';
import List from './List';

const sample = [
    {
        'icon': <LeafIcon />,
        'content': 'First content',
        'details': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        'icon': <CardsIcon />,
        'content': 'Second content',
        'details': 'Lorem ipsum dolor sit amet.'
    },
    {
        'icon': <OrganizationIcon />,
        'content': 'Third content',
        'details': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.'
    },
    {
        'icon': <MealIcon />,
        'content': 'Fourth content',
        'details': 'Lorem ipsum dolor sit amet consectetur.'
    },
];

storiesOf('List', module).addDecorator(withKnobs)
.add('List', () => (
    <List
        listStyle={radios('List style', listStyleOptions, listStyleDefault)}
        colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
        hasDetails={boolean('Display details', false)}
        isClickable={boolean('Is clickable', false)}
        elements={sample}
    />
));