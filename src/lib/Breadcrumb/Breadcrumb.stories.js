import React from 'react';
import Breadcrumb from './Breadcrumb';
import {
    colorThemeOptions,
    colorThemeDefault,
    colorTypeOptions,
    colorTypeDefault,
    blockSpaceOptions,
    blockSpaceDefault
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

storiesOf('Breadcrumb', module)
    .addDecorator(withKnobs)
    .add('Breadcrumb', () => (
        <Breadcrumb
            elements={sampleLinks}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
            marginLateral={select('Lateral margins', blockSpaceOptions, blockSpaceDefault)}
            marginTop={select('Margin top', blockSpaceOptions, blockSpaceOptions.xs)}
            marginBottom={select('Margin bottom', blockSpaceOptions, blockSpaceOptions.xs)}
        />
    ), {
        notes: 'Breadcrumb takes an array of objects as "elements" prop.',
    });