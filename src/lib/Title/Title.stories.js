import React from 'react';
import Title from './Title';
import {
    seoOptions,
    typeOptions,
    typeDefault,
    colorOptions,
    colorDefault,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
} from '../../shared/const';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

storiesOf('Title', module)
    .addDecorator(withKnobs)
    .add('Solid', () => (
        <Title
            seo={radios('SEO', seoOptions, '1')}
            type={radios('Type', typeOptions, typeDefault)}
            colorStyle='solid'
            color={radios('Main color', colorOptions, colorDefault)}
            size={radios('Size', fontSizeOptions, fontSizeDefault)}
            align={radios('Align', alignOptions, alignDefault)}
            marginTop={radios('Margin top', spaceOptions, 'xs')}
            marginBottom={radios('Margin bottom', spaceOptions, 'xs')}
            border={boolean('Border bottom', true)}
        >
            {text('Label', 'Your simple title')}
        </Title>
    ), {
        notes: 'Notes for solid title.',
    })
    .add('Bicolour', () => (
        <Title
            seo={radios('SEO', seoOptions, '1')}
            type={radios('Type', typeOptions, typeDefault)}
            colorStyle='bicolour'
            color={radios('Main color', colorOptions, colorDefault)}
            color2={radios('Second color', {Grey: 'grey40', DarkGrey: 'grey60'}, 'grey40')}
            size={radios('Size', fontSizeOptions, fontSizeDefault)}
            align={radios('Align', alignOptions, alignDefault)}
            marginTop={radios('Margin top', spaceOptions, 'xs')}
            marginBottom={radios('Margin bottom', spaceOptions, 'xs')}
            border={boolean('Border bottom', true)}
        >
            Your title with <b>an emphasis</b>
        </Title>
    ), {
        notes: 'Notes for a bicolour title. There is a <b> tag around "an emphasis" text.',
    });