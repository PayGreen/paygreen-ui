import React from 'react';
import Title from './Title';
import {
    titleHtmlTagOptions,
    titleHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorNumberOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    fontSizeOptions,
    alignOptions,
    alignDefault,
    blockSpaceOptions,
    blockSpaceDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('Title', module)
    .addDecorator(withKnobs)
    .add('With only one color', () => (
        <Title
            underline={boolean('Underline', true)}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
            textSize={select('Size', fontSizeOptions, 'lg')}
            textAlign={radios('Align', alignOptions, alignDefault)}
            marginTop={select('Margin top', blockSpaceOptions, blockSpaceDefault)}
            paddingBlock={select('Padding', blockSpaceOptions, blockSpaceDefault)}
            titleHtmlTag={select('HTML tag', titleHtmlTagOptions, titleHtmlTagDefault)}
        >
            {text('Label', 'Your simple title')}
        </Title>
    ), {
        notes: 'BTW, you can choose margin-bottom size and your HTML tag (for seo).',
    })
    .add('With two colors', () => (
        <Title
            underline={boolean('Underline', true)}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorNumber={colorNumberOptions.two}
            colorTheme={radios('Main color', colorThemeOptions, colorThemeDefault)}
            color2={select('Second color', greyOptions, greyDefault)}
            textSize={select('Size', fontSizeOptions, fontSizeOptions.lg)}
            textAlign={radios('Align', alignOptions, alignDefault)}
            marginTop={select('Margin top', blockSpaceOptions, blockSpaceDefault)}
            paddingBlock={select('Padding', blockSpaceOptions, blockSpaceDefault)}
            titleHtmlTag={select('HTML tag', titleHtmlTagOptions, titleHtmlTagDefault)}
        >
            Your title with <strong>an emphasis</strong>
        </Title>
    ), {
        notes: 'You can change colors number with colorNumber prop. There is a <code>&lt;strong&gt;</code> tag around "an emphasis". BTW, you can choose margin-bottom size and your HTML tag.',
    });