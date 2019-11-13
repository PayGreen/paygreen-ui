import React from 'react';
import Card from './Card';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Title from '../Title/Title';
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

    colorNumberOptions,
    fontSizeOptions,
    alignOptions,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

const colorTypeLabel = 'Color type';
const colorThemeLabel = 'Color theme';

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Default card', () => (
        <Card
            colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            shadow={radios('Shadow style', shadowStyleOptions, shadowStyleDefault)}
            hasBackground={boolean('With background', true)}
            blockSize={select('Block dimensions', blockSizeOptions, blockSizeDefault)}
            radiusSize={radios('Border radius', radiusOptions, radiusDefault)}
            cardHtmlTag={select('HTML card tag', cardHtmlTagOptions, cardHtmlTagDefault)}
        >
            <Title
                colorNumber={colorNumberOptions.two}
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                underline={true}
                textSize={fontSizeOptions.lg}
            >
                Content <b>sample</b>
            </Title>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor velit a ultricies aliquet. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. Curabitur bibendum risus gravida tellus condimentum tristique. Sed ut elit efficitur, sagittis urna sed, scelerisque eros. 
            </p>

            <ButtonGroup buttonAlign={alignOptions.center}>
                <a href="#">
                    <Button
                        colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    >
                        Don't click
                    </Button>
                </a>
            </ButtonGroup>
        </Card>
    ), {
        notes: 'Card.',
    });