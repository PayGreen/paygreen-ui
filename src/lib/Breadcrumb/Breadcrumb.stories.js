import React from 'react';
import Breadcrumb from './Breadcrumb';
import {
    colorThemeOptions,
    colorThemeDefault,
    colorTypeOptions,
    colorTypeDefault,
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';

const sampleLinks = [
    {
        url: '#',
        label: 'Home',
    },
    {
        url: '#',
        label: 'Blog',
    },
    {
        url: '#',
        label: 'Category',
    },
    {
        url: '#',
        label: 'Article title',
    },
];

storiesOf('Paygreen | Breadcrumb', module)
    .addDecorator(withKnobs)
    .add('Breadcrumb', () => (
        <Breadcrumb
            elements={sampleLinks}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
            marginLateral={select('Lateral margins', spaceOptions, spaceDefault)}
            marginTop={select('Margin top', spaceOptions, spaceOptions.xs)}
            marginBottom={select('Margin bottom', spaceOptions, spaceOptions.xs)}
        />
    ), {
        notes: 'Breadcrumb takes an array of objects as "elements" prop.',
    });