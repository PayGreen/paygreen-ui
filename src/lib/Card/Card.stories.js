import React from 'react';
import Card from './Card';
import {
    cardHtmlTagOptions,
    cardHtmlTagDefault,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Card', () => (
        <Card
            cardHtmlTag={select('HTML card tag', cardHtmlTagOptions, cardHtmlTagDefault)}
        >
            Sample text
        </Card>
    ), {
        notes: 'Card.',
    });