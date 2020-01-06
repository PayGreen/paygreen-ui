import React from 'react';
import Title from './Title';
import {
    titleHtmlTagOptions,
    titleHtmlTagDefault,

    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,

    fontSizeOptions,
    alignOptions,
    alignDefault,
    blockSpaceOptions,
    blockSpaceDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

storiesOf('Title', module).addDecorator(withKnobs)
.add('Title', () => (
    <Title
        underline={boolean('Underline', true)}

        colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
        colorPallet={radios('Color pallet', colorPalletOptions, colorPalletOptions.wab)}
        colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
        colorWab={select('Grey color', greyOptions, greyDefault)}
        colorStatus={select('Status color', formStatusOptions, formStatusDefault)}
        
        textSize={select('Size', fontSizeOptions, fontSizeOptions.lg)}
        textAlign={radios('Align', alignOptions, alignDefault)}
        marginLateral={select('Lateral margin', blockSpaceOptions, blockSpaceDefault)}
        marginTop={select('Margin top', blockSpaceOptions, blockSpaceDefault)}
        titleHtmlTag={select('HTML tag', titleHtmlTagOptions, titleHtmlTagDefault)}
    >
        Your title with <strong>an emphasis</strong>
    </Title>
), {
    notes: 'There is a <code>&lt;strong&gt;</code> tag around "an emphasis".',
});