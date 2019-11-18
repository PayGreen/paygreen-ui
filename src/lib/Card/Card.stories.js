import React from 'react';
import Card from './Card';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Text from '../Text/Text';
import Title from '../Title/Title';
import imageFile from './sample/sample.png';
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
    borderGradientOptions,

    colorNumberOptions,
    fontSizeOptions,
    alignOptions,
    blockPaddingOptions,
    blockPaddingDefault,
    buttonSizeOptions,
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
                Title <strong>sample</strong>
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
        notes: 'Default card.',
    })
    .add('Border-top card', () => (
        <Card
            colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            blockWidth={blockWidthOptions.sm}
            radiusSize={radios('Border radius', radiusOptions, radiusDefault)}
            borderTop={radios('Border-top style', borderGradientOptions, borderGradientOptions.theme)}
        >
            <Title
                colorNumber={colorNumberOptions.two}
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                marginTop={blockPaddingOptions.sm}
                paddingBlock={blockPaddingOptions.sm}
                textSize={fontSizeOptions.md}
            >
                Title sample
            </Title>

            <Text
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                marginTop={blockPaddingOptions.xs}
                paddingBlock={blockPaddingOptions.sm}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. 
            </Text>

            <ButtonGroup
                buttonAlign={alignOptions.center}
                marginTop={blockPaddingOptions.sm}
                marginBottom={blockPaddingOptions.sm}
                paddingBlock={blockPaddingOptions.sm}
            >
                <a href="#">
                    <Button
                        colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                        buttonSize={buttonSizeOptions.sm}
                    >
                        Don't click
                    </Button>
                </a>
            </ButtonGroup>
        </Card>
    ), {
        notes: 'Card with gradient border-top design. Can\'t be used in reverse mode. Border weight changes with border-radius. Available gradients are theme gradients and brand gradient (primary and secondary colors).',
    })
    .add('Card with title out', () => (
        <Card
            colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeOptions.reverse)}
            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            blockWidth={blockWidthOptions.sm}
            params={{
                titleOut: true,
            }}
        >
            <Title
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                paddingBlock={blockPaddingOptions.sm}
                textSize={fontSizeOptions.lg}
            >
                Sample
            </Title>

            <div class="container">
                <Text
                    colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    marginTop={blockPaddingOptions.sm}
                    paddingBlock={blockPaddingOptions.sm}
                    textSize={fontSizeOptions.sm}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. 
                </Text>

                <ButtonGroup
                    buttonAlign={alignOptions.center}
                    marginTop={blockPaddingOptions.sm}
                    marginBottom={blockPaddingOptions.sm}
                    paddingBlock={blockPaddingOptions.sm}
                >
                    <a href="#">
                        <Button
                            colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                            buttonSize={buttonSizeOptions.sm}
                        >
                            Don't click
                        </Button>
                    </a>
                </ButtonGroup>
            </div>
        </Card>
    ), {
        notes: 'Card with main title out of the block. Needs an internal div and a titleOut param at "true". Don\'t use this template with long titles!',
    })
    .add('Card with image', () => (
        <Card
            blockWidth={select(blockWidthLabel, blockWidthOptions, blockWidthDefault)}
        >
            <div class="image">
                <img src={imageFile} />
            </div>

            <Title
                colorNumber={colorNumberOptions.two}
                marginTop={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
                paddingBlock={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
                textSize={fontSizeOptions.md}
            >
                Title sample
            </Title>

            <Text
                paddingBlock={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
                marginTop={blockPaddingOptions.xs}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. 
            </Text>

            <ButtonGroup
                buttonAlign={alignOptions.center}
                marginTop={blockPaddingOptions.sm}
                marginBottom={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
                paddingBlock={select(blockWidthLabel, blockPaddingOptions, blockPaddingDefault)}
            >
                <a href="#">
                    <Button buttonSize={buttonSizeOptions.sm}>
                        Don't click
                    </Button>
                </a>
            </ButtonGroup>
        </Card>
    ), {
        notes: 'Card with image in header. It doesn\'t need a specific prop: just put your <img> tag inside a div class="image" at the beginning of your Card component.',
    })
    .add('Card without background', () => (
        <Card
            colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            hasBackground={false}
            blockWidth={select(blockWidthLabel, blockWidthOptions, blockWidthDefault)}
        >
            <Title
                colorNumber={colorNumberOptions.two}
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                underline={true}
                textSize={fontSizeOptions.xl}
            >
                Title <strong>sample</strong>
            </Title>

            <Text
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                textSize={fontSizeOptions.md}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio.
            </Text>
        </Card>
    ), {
        notes: 'Very basic card, without background, shadow, paddings and radius. Change background color to see the reverse color type result.',
    });