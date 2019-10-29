import React from 'react';
import Title from './Title';
import {
    seoOptions,
    seoDefault,
    typeOptions,
    typeDefault,
    colorNumberDefault,
    colorOptions,
    colorDefault,
    greyOptions,
    greyDefault,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/const';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('Title', module)
    .addDecorator(withKnobs)
    .add('Solid', () => (
        <Title
            seo={select('SEO', seoOptions, seoDefault)}
            type={radios('Type', typeOptions, typeDefault)}
            colorNumber={colorNumberDefault}
            color={radios('Main color', colorOptions, colorDefault)}
            size={select('Size', fontSizeOptions, fontSizeDefault)}
            align={radios('Align', alignOptions, alignDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
            border={boolean('Border bottom', true)}
        >
            {text('Label', 'Your simple title')}
        </Title>
    ), {
        notes: 'Notes for solid title.',
    })
    .add('Bicolour', () => (
        <Title
            seo={select('SEO', seoOptions, seoDefault)}
            type={radios('Type', typeOptions, typeDefault)}
            colorNumber={colorNumberDefault}
            color={radios('Main color', colorOptions, colorDefault)}
            color2={radios('Second color', greyOptions, greyDefault)}
            size={select('Size', fontSizeOptions, fontSizeDefault)}
            align={radios('Align', alignOptions, alignDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
            border={boolean('Border bottom', true)}
        >
            Your title with <b>an emphasis</b>
        </Title>
    ), {
        notes: 'Notes for a bicolour title. There is a <code>&lt;b&gt;</code> tag around "an emphasis" text.',
    });