import React from 'react';
import Breadcrumb from './Breadcrumb';
import {
    colorThemeOptions,
    colorThemeDefault,
    colorTypeOptions,
    colorTypeDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

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
            color={radios('Color', colorThemeOptions, colorThemeDefault)}
        />
    ), {
        notes: 'Breadcrumb takes an array of objects as "element" prop.',
    });