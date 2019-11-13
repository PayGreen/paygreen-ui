import React from 'react';
import Card from './Card';
import {
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault,
    shadowStyleOptions,
    shadowStyleDefault,
    blockSizeOptions,
    blockSizeDefault,
    radiusOptions,
    radiusDefault,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Default card', () => (
        <Card
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
            shadow={radios('Shadow style', shadowStyleOptions, shadowStyleDefault)}
            hasBackground={boolean('With background', true)}
            blockSize={select('Block dimensions', blockSizeOptions, blockSizeDefault)}
            radiusSize={radios('Border radius', radiusOptions, radiusDefault)}
            cardHtmlTag={select('HTML card tag', cardHtmlTagOptions, cardHtmlTagDefault)}
        >
            Sample text
        </Card>
    ), {
        notes: 'Card.',
    });