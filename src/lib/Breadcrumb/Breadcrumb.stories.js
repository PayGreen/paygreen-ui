import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorTypeOptions,
    colorTypeDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Breadcrumb from './Breadcrumb';

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

storiesOf(folder.nav + 'Breadcrumb', module)
    .addDecorator(withKnobs)
    .add('Breadcrumb', () => (
        <Breadcrumb
            elements={sampleLinks}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorTheme={radios(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            marginLateral={select(
                'Lateral margins',
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select('Margin top', spaceOptions, spaceOptions.xs)}
            marginBottom={select(
                'Margin bottom',
                spaceOptions,
                spaceOptions.xs,
            )}
        />
    ));
