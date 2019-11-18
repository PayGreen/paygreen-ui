import React from 'react';
import Card from './Card';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Text from '../Text/Text';
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
    blockWidthOptions,
    blockWidthDefault,
    radiusOptions,
    radiusDefault,

    colorNumberOptions,
    fontSizeOptions,
    alignOptions,
    blockPaddingOptions,
    blockPaddingDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

const colorTypeLabel = 'Color type';
const colorThemeLabel = 'Color theme';
const blockWidthLabel = 'Block width';

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Default card', () => (
        <Card
            colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            shadow={radios('Shadow style', shadowStyleOptions, shadowStyleDefault)}
            hasBackground={boolean('With background', true)}
            blockWidth={select(blockWidthLabel, blockWidthOptions, blockWidthDefault)}
            radiusSize={radios('Border radius', radiusOptions, radiusDefault)}
            cardHtmlTag={select('HTML card tag', cardHtmlTagOptions, cardHtmlTagDefault)}
        >
            <Title
                colorNumber={colorNumberOptions.two}
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                marginTop={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
                paddingBlock={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
                underline={true}
                textSize={fontSizeOptions.lg}
            >
                Content <b>sample</b>
            </Title>

            <Text
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                paddingBlock={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. Curabitur bibendum risus gravida tellus condimentum tristique. Sed ut elit efficitur, sagittis urna sed, scelerisque eros. 
            </Text>

            <ButtonGroup
                buttonAlign={alignOptions.center}
                marginTop={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
                marginBottom={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
                paddingBlock={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
            >
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