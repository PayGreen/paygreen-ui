import React from 'react';
import Card from './Card';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Image from '../Image/Image';
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
    gradientOptions,

    fontSizeOptions,
    maskOptions,
    imageTypeOptions,
    blockSpaceOptions,
    blockSpaceDefault,
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
            hasBackground={boolean('Has background', true)}
            blockWidth={select(blockWidthLabel, blockWidthOptions, blockWidthDefault)}
            radiusSize={radios('Border radius', radiusOptions, radiusDefault)}
            htmlTag={select('HTML card tag', cardHtmlTagOptions, cardHtmlTagDefault)}
        >
            <Title
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                marginLateral={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
                marginTop={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
                underline={true}
                textSize={fontSizeOptions.lg}
            >
                Title <strong>sample</strong>
            </Title>

            <Text
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                marginLateral={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. Curabitur bibendum risus gravida tellus condimentum tristique. Sed ut elit efficitur, sagittis urna sed, scelerisque eros. 
            </Text>

            <ButtonGroup
                marginTop={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
                marginBottom={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
                paddingBlock={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
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
            borderTop={radios('Border-top style', gradientOptions, gradientOptions.theme)}
        >
            <Title
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.sm}
                textSize={fontSizeOptions.md}
            >
                Title sample
            </Title>

            <Text
                colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.xs}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. 
            </Text>

            <ButtonGroup
                marginTop={blockSpaceOptions.sm}
                marginBottom={blockSpaceOptions.sm}
                paddingBlock={blockSpaceOptions.sm}
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
            hasTitleOut={true}
        >
            <Title
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                marginLateral={blockSpaceOptions.sm}
                textSize={fontSizeOptions.lg}
            >
                Sample
            </Title>

            <div>
                <Text
                    colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
                    colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                    marginLateral={blockSpaceOptions.sm}
                    marginTop={blockSpaceOptions.sm}
                    textSize={fontSizeOptions.sm}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. 
                </Text>

                <ButtonGroup
                    marginTop={blockSpaceOptions.sm}
                    marginBottom={blockSpaceOptions.sm}
                    paddingBlock={blockSpaceOptions.sm}
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
        notes: 'Card with main title out of the block. Needs an internal div and a hasTitleOut prop at "true". Don\'t use this template with long titles!',
    })
    .add('Card with image', () => (
        <Card
            blockWidth={select(blockWidthLabel, blockWidthOptions, blockWidthDefault)}
        >
            <Image imageType={imageTypeOptions.cover} bottomStyle={maskOptions.waveLeft}>
                <img src={imageFile} alt="picture" />
            </Image>

            <Title
                marginLateral={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
                marginTop={blockSpaceOptions.sm}
                textSize={fontSizeOptions.md}
            >
                Title sample
            </Title>

            <Text
                marginLateral={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
                marginTop={blockSpaceOptions.xs}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. 
            </Text>

            <ButtonGroup
                marginTop={blockSpaceOptions.sm}
                marginBottom={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
                paddingBlock={select(blockWidthLabel, blockSpaceOptions, blockSpaceDefault)}
            >
                <a href="#">
                    <Button buttonSize={buttonSizeOptions.sm}>
                        Don't click
                    </Button>
                </a>
            </ButtonGroup>
        </Card>
    ), {
        notes: 'Card with image in header. It doesn\'t need a specific prop: just use the Image component at the beginning of your Card component.',
    })
    .add('Card without background', () => (
        <Card
            colorType={radios(colorTypeLabel, colorTypeOptions, colorTypeDefault)}
            colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
            hasBackground={false}
            blockWidth={select(blockWidthLabel, blockWidthOptions, blockWidthDefault)}
        >
            <Title
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