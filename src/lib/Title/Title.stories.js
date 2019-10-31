import React from 'react';
import Title from './Title';
import {
    seoOptions,
    seoDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorNumberOptions,
    colorOptions,
    colorDefault,
    greyOptions,
    greyDefault,
    fontSizeOptions,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('Title', module)
    .addDecorator(withKnobs)
    .add('With only one color', () => (
        <Title
            seo={select('SEO', seoOptions, seoDefault)}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            color={radios('Color', colorOptions, colorDefault)}
            size={select('Size', fontSizeOptions, 'lg')}
            align={radios('Align', alignOptions, alignDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            underline={boolean('Underline', true)}
        >
            {text('Label', 'Your simple title')}
        </Title>
    ), {
        notes: 'BTW, you can choose margin-bottom size and your tag (for seo).',
    })
    .add('With two colors', () => (
        <Title
            seo={select('SEO', seoOptions, seoDefault)}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorNumber={colorNumberOptions.two}
            color={radios('Main color', colorOptions, colorDefault)}
            color2={radios('Second color', greyOptions, greyDefault)}
            size={select('Size', fontSizeOptions, 'lg')}
            align={radios('Align', alignOptions, alignDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            underline={boolean('Underline', true)}
        >
            Your title with <b>an emphasis</b>
        </Title>
    ), {
        notes: 'You can change colors number with colorNumber prop. There is a <code>&lt;b&gt;</code> tag around "an emphasis" text. BTW, you can choose margin-bottom size and your tag (for seo).',
    });