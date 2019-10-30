import React from 'react';
import Breadcrumb from './Breadcrumb';
import {
    colorOptions,
    colorDefault,
    typeOptions,
    typeDefault
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
            type={radios('Type', typeOptions, typeDefault)}
            color={radios('Color', colorOptions, colorDefault)}
        />
    ), {
        notes: 'Breadcrumb takes an array of objects as "element" prop.',
    });