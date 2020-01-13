import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault,
    shadowSizeOptions,
    shadowSizeDefault,
    blockWidthOptions,
    blockWidthDefault,
    radiusOptions,
    radiusDefault,
    gradientOptions,
    fontSizeOptions,
    maskOptions,
    imageTypeOptions,
    spaceOptions,
    spaceDefault,
    buttonSizeOptions,
} from '../../shared/constants';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Title from '../Title/Title';
import Card from './Card';
import imageFile from './sample/sample.png';

const colorTypeLabel = 'Color type';
const colorThemeLabel = 'Color theme';
const blockWidthLabel = 'Block width';

storiesOf(folder.main + 'Card', module)
    .addDecorator(withKnobs)
    .add(
        'Default card',
        () => (
            <Card
                colorType={radios(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                shadowSize={radios(
                    'Shadow size',
                    shadowSizeOptions,
                    shadowSizeDefault,
                )}
                hasBackground={boolean('Has background', true)}
                blockWidth={select(
                    blockWidthLabel,
                    blockWidthOptions,
                    blockWidthDefault,
                )}
                radiusSize={radios(
                    'Border radius',
                    radiusOptions,
                    radiusDefault,
                )}
                htmlTag={select(
                    'HTML card tag',
                    cardHtmlTagOptions,
                    cardHtmlTagDefault,
                )}
            >
                <Title
                    colorType={radios(
                        colorTypeLabel,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    marginLateral={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                    marginTop={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                    hasUnderline={true}
                    textSize={fontSizeOptions.lg}
                >
                    Title <strong>sample</strong>
                </Title>

                <Text
                    colorType={radios(
                        colorTypeLabel,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    marginLateral={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                    <strong>Duis porttitor velit a ultricies aliquet</strong>.
                    Donec vehicula in arcu non sodales. Fusce et consectetur
                    odio. Ut bibendum ullamcorper turpis vel imperdiet.
                    Curabitur bibendum risus gravida tellus condimentum
                    tristique. Sed ut elit efficitur, sagittis urna sed,
                    scelerisque eros.
                </Text>

                <ButtonGroup
                    marginTop={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                    marginBottom={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                    paddingBlock={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                >
                    <a href="#">
                        <Button
                            colorType={radios(
                                colorTypeLabel,
                                colorTypeOptions,
                                colorTypeDefault,
                            )}
                            colorTheme={radios(
                                colorThemeLabel,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                        >
                            Don't click
                        </Button>
                    </a>
                </ButtonGroup>
            </Card>
        ),
        {
            notes: 'Default card.',
        },
    )
    .add(
        'Border-top card',
        () => (
            <Card
                colorType={radios(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                blockWidth={blockWidthOptions.sm}
                radiusSize={radios(
                    'Border radius',
                    radiusOptions,
                    radiusDefault,
                )}
                borderTop={radios(
                    'Border-top style',
                    gradientOptions,
                    gradientOptions.theme,
                )}
            >
                <Title
                    colorType={radios(
                        colorTypeLabel,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    textSize={fontSizeOptions.md}
                >
                    Title sample
                </Title>

                <Text
                    colorType={radios(
                        colorTypeLabel,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.xs}
                    textSize={fontSizeOptions.sm}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                    <strong>Duis porttitor velit a ultricies aliquet</strong>.
                    Donec vehicula in arcu non sodales. Fusce et consectetur
                    odio. Ut bibendum ullamcorper turpis vel imperdiet.
                </Text>

                <ButtonGroup
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                    paddingBlock={spaceOptions.sm}
                >
                    <a href="#">
                        <Button
                            colorType={radios(
                                colorTypeLabel,
                                colorTypeOptions,
                                colorTypeDefault,
                            )}
                            colorTheme={radios(
                                colorThemeLabel,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                            buttonSize={buttonSizeOptions.sm}
                        >
                            Don't click
                        </Button>
                    </a>
                </ButtonGroup>
            </Card>
        ),
        {
            notes:
                "Card with gradient border-top design. Can't be used in reverse mode. Border weight changes with border-radius. Available gradients are theme gradients and brand gradient (primary and secondary colors).",
        },
    )
    .add(
        'Card with title out',
        () => (
            <Card
                colorType={radios(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeOptions.reverse,
                )}
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                blockWidth={blockWidthOptions.sm}
                hasTitleOut={true}
            >
                <Title
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    marginLateral={spaceOptions.sm}
                    textSize={fontSizeOptions.lg}
                >
                    Sample
                </Title>

                <div>
                    <Text
                        colorType={radios(
                            colorTypeLabel,
                            colorTypeOptions,
                            colorTypeDefault,
                        )}
                        colorTheme={radios(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        marginLateral={spaceOptions.sm}
                        marginTop={spaceOptions.sm}
                        textSize={fontSizeOptions.sm}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                        <strong>
                            Duis porttitor velit a ultricies aliquet
                        </strong>
                        . Donec vehicula in arcu non sodales. Fusce et
                        consectetur odio. Ut bibendum ullamcorper turpis vel
                        imperdiet.
                    </Text>

                    <ButtonGroup
                        marginTop={spaceOptions.sm}
                        marginBottom={spaceOptions.sm}
                        paddingBlock={spaceOptions.sm}
                    >
                        <a href="#">
                            <Button
                                colorType={radios(
                                    colorTypeLabel,
                                    colorTypeOptions,
                                    colorTypeDefault,
                                )}
                                colorTheme={radios(
                                    colorThemeLabel,
                                    colorThemeOptions,
                                    colorThemeDefault,
                                )}
                                buttonSize={buttonSizeOptions.sm}
                            >
                                Don't click
                            </Button>
                        </a>
                    </ButtonGroup>
                </div>
            </Card>
        ),
        {
            notes:
                'Card with main title out of the block. Needs an internal div and a hasTitleOut prop at "true". Don\'t use this template with long titles!',
        },
    )
    .add(
        'Card with image',
        () => (
            <Card
                blockWidth={select(
                    blockWidthLabel,
                    blockWidthOptions,
                    blockWidthDefault,
                )}
            >
                <Image
                    imageType={imageTypeOptions.cover}
                    bottomStyle={maskOptions.waveLeft}
                >
                    <img src={imageFile} alt="picture" />
                </Image>

                <Title
                    marginLateral={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                    marginTop={spaceOptions.sm}
                    textSize={fontSizeOptions.md}
                >
                    Title sample
                </Title>

                <Text
                    marginLateral={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                    marginTop={spaceOptions.xs}
                    textSize={fontSizeOptions.sm}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                    <strong>Duis porttitor velit a ultricies aliquet</strong>.
                    Donec vehicula in arcu non sodales. Fusce et consectetur
                    odio. Ut bibendum ullamcorper turpis vel imperdiet.
                </Text>

                <ButtonGroup
                    marginTop={spaceOptions.sm}
                    marginBottom={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                    paddingBlock={select(
                        blockWidthLabel,
                        spaceOptions,
                        spaceDefault,
                    )}
                >
                    <a href="#">
                        <Button buttonSize={buttonSizeOptions.sm}>
                            Don't click
                        </Button>
                    </a>
                </ButtonGroup>
            </Card>
        ),
        {
            notes:
                "Card with image in header. It doesn't need a specific prop: just use the Image component at the beginning of your Card component.",
        },
    )
    .add(
        'Card without background',
        () => (
            <Card
                colorType={radios(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                hasBackground={false}
                blockWidth={select(
                    blockWidthLabel,
                    blockWidthOptions,
                    blockWidthDefault,
                )}
            >
                <Title
                    colorType={radios(
                        colorTypeLabel,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    hasUnderline={true}
                    textSize={fontSizeOptions.xl}
                >
                    Title <strong>sample</strong>
                </Title>

                <Text
                    colorType={radios(
                        colorTypeLabel,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorTheme={radios(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    textSize={fontSizeOptions.md}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                    <strong>Duis porttitor velit a ultricies aliquet</strong>.
                    Donec vehicula in arcu non sodales. Fusce et consectetur
                    odio.
                </Text>
            </Card>
        ),
        {
            notes:
                'Very basic card, without background, shadow, paddings and radius. Change background color to see the reverse color type result.',
        },
    );
