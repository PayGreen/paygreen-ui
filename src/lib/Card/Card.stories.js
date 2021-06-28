import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    shadowSizeOptions,
    shadowSizeDefault,
    radiusOptions,
    radiusDefault,
    gradientOptions,
    fontSizeOptions,
    maskOptions,
    imageTypeOptions,
    spaceOptions,
    buttonSizeOptions,
    colorStyleOptions,
    lateralPositionOptions,
    cornerStyleOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Image from '../Image/Image';
import Popin from '../Popin/Popin';
import Text from '../Text/Text';
import Title from '../Title/Title';
import Corner from '../Corner/Corner';
import Card from './Card';
import imageFile from './sample/sample.png';

storiesOf(folder.block + 'Card', module)
    .addDecorator(withKnobs)
    .add('Default card', () => (
        <Card
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            shadowSize={radios(
                labels.shadowSize,
                shadowSizeOptions,
                shadowSizeDefault,
            )}
            hasBackground={boolean(labels.hasBackground, true)}
            blockWidth={select(
                labels.blockWidth,
                spaceOptions,
                spaceOptions.md,
            )}
            radiusSize={radios(
                labels.radiusSize,
                radiusOptions,
                radiusDefault,
            )}
            htmlTag={select(
                labels.htmlTag,
                cardHtmlTagOptions,
                cardHtmlTagDefault,
            )}
        >
            <Corner
                label="Since 2016"
                cornerStyle={cornerStyleOptions.banner}
                colorStyle={colorStyleOptions.light}
                position={lateralPositionOptions.right}
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            />

            <Title
                colorType={radios(
                    labels.colorType,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                marginLateral={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
                marginTop={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
                hasUnderline={true}
                textSize={fontSizeOptions.lg}
            >
                Title <strong>sample</strong>
            </Title>

            <Text
                colorType={radios(
                    labels.colorType,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                marginLateral={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
                vehicula in arcu non sodales. Fusce et consectetur odio. Ut
                bibendum ullamcorper turpis vel imperdiet. Curabitur bibendum
                risus gravida tellus condimentum tristique. Sed ut elit
                efficitur, sagittis urna sed, scelerisque eros.
            </Text>

            <ButtonGroup
                marginTop={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
                marginBottom={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
                paddingBlock={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
                hasResetedMargins={false}
            >
                <button type="button">
                    <Button
                        colorType={radios(
                            labels.colorType,
                            colorTypeOptions,
                            colorTypeDefault,
                        )}
                        colorTheme={radios(
                            labels.colorTheme,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                    >
                        Your button
                    </Button>
                </button>
            </ButtonGroup>
        </Card>
    ))
    .add('Border-top card', () => (
        <Card
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            blockWidth={spaceOptions.sm}
            radiusSize={radios(
                labels.radiusSize,
                radiusOptions,
                radiusDefault,
            )}
            borderTop={radios(
                'Border top gradient',
                gradientOptions,
                gradientOptions.theme,
            )}
        >
            <Title
                colorType={radios(
                    labels.colorType,
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
                    labels.colorType,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                marginLateral={spaceOptions.sm}
                marginTop={spaceOptions.xs}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
                vehicula in arcu non sodales. Fusce et consectetur odio. Ut
                bibendum ullamcorper turpis vel imperdiet.
            </Text>

            <ButtonGroup
                marginTop={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
                paddingBlock={spaceOptions.sm}
            >
                <button type="button">
                    <Button
                        colorType={radios(
                            labels.colorType,
                            colorTypeOptions,
                            colorTypeDefault,
                        )}
                        colorTheme={radios(
                            labels.colorTheme,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        buttonSize={buttonSizeOptions.sm}
                    >
                        Your button
                    </Button>
                </button>
            </ButtonGroup>
        </Card>
    ))
    .add('Card with title out', () => (
        <Card
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeOptions.reverse,
            )}
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            blockWidth={spaceOptions.sm}
            hasTitleOut={true}
        >
            <Title
                colorTheme={radios(
                    labels.colorTheme,
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
                        labels.colorType,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorTheme={radios(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
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
                    <button type="button">
                        <Button
                            colorType={radios(
                                labels.colorType,
                                colorTypeOptions,
                                colorTypeDefault,
                            )}
                            colorTheme={radios(
                                labels.colorTheme,
                                colorThemeOptions,
                                colorThemeDefault,
                            )}
                            buttonSize={buttonSizeOptions.sm}
                        >
                            Your button
                        </Button>
                    </button>
                </ButtonGroup>
            </div>
        </Card>
    ))
    .add('Card with image', () => (
        <Card
            blockWidth={select(
                labels.blockWidth,
                spaceOptions,
                spaceOptions.md,
            )}
            isShadowWab={boolean('Is shadow wab', true)}
        >
            <Image
                imageType={imageTypeOptions.cover}
                bottomStyle={maskOptions.waveLeft}
            >
                <img src={imageFile} alt="picture" />
            </Image>

            <Title
                marginLateral={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
                marginTop={spaceOptions.sm}
                textSize={fontSizeOptions.md}
            >
                Title sample
            </Title>

            <Text
                marginLateral={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
                marginTop={spaceOptions.xs}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
                vehicula in arcu non sodales. Fusce et consectetur odio. Ut
                bibendum ullamcorper turpis vel imperdiet.
            </Text>

            <ButtonGroup
                marginTop={spaceOptions.sm}
                marginBottom={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
                paddingBlock={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.md,
                )}
            >
                <button type="button">
                    <Button buttonSize={buttonSizeOptions.sm}>
                        Don't click
                    </Button>
                </button>
            </ButtonGroup>
        </Card>
    ))
    .add('Card without background', () => (
        <Card
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            hasBackground={false}
            blockWidth={select(
                labels.blockWidth,
                spaceOptions,
                spaceOptions.md,
            )}
        >
            <Title
                colorType={radios(
                    labels.colorType,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={radios(
                    labels.colorTheme,
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
                    labels.colorType,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                textSize={fontSizeOptions.md}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
                vehicula in arcu non sodales. Fusce et consectetur odio.
            </Text>
        </Card>
    ))
    .add('Card with colored background', () => (
        <Card
            colorPallet={radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletOptions.wab,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyOptions.white20)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            shadowSize={shadowSizeOptions.none}
            blockWidth={spaceOptions.sm}
        >
            <Corner
                label="?"
                position={lateralPositionOptions.right}
                colorPallet={
                    radios(
                        labels.colorPallet,
                        colorPalletOptions,
                        colorPalletOptions.wab,
                    ) === colorPalletOptions.wab
                        ? colorPalletOptions.theme
                        : radios(
                              labels.colorPallet,
                              colorPalletOptions,
                              colorPalletOptions.wab,
                          )
                }
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorStatus={select(
                    labels.colorStatus,
                    formStatusOptions,
                    formStatusDefault,
                )}
            >
                <Popin>
                    <Text
                        marginTop={spaceOptions.xs}
                        marginLateral={spaceOptions.xs}
                        marginBottom={spaceOptions.xs}
                        textSize={fontSizeOptions.xs}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                </Popin>
            </Corner>

            <Title
                marginTop={spaceOptions.sm}
                marginLateral={spaceOptions.sm}
                colorPallet={radios(
                    labels.colorPallet,
                    colorPalletOptions,
                    colorPalletOptions.wab,
                )}
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorStatus={select(
                    labels.colorStatus,
                    formStatusOptions,
                    formStatusDefault,
                )}
            >
                Title <strong>colored</strong>
            </Title>

            <Text
                textSize={fontSizeOptions.sm}
                marginTop={spaceOptions.xs}
                marginLateral={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis{' '}
                <strong>porttitor velit a ultricies aliquet</strong>. Donec
                vehicula in arcu non sodales. Fusce et consectetur odio.
            </Text>
        </Card>
    ))
    .add('Button card', () => (
        <Card
            htmlTag={cardHtmlTagOptions.button}
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyOptions.white20)}
            hasDashedBorder={boolean('Has dashed borders', true)}
            blockWidth={spaceOptions.xs}
            paddingTop={spaceOptions.sm}
            paddingBottom={spaceOptions.sm}
            paddingLateral={spaceOptions.sm}
            shadowSize={shadowSizeOptions.none}
            radiusSize={radiusOptions.sm}
        >
            <Text colorWab={greyOptions.grey30}>
                <i>New group</i>
            </Text>

            <Text
                textSize={fontSizeOptions.sm}
                marginTop={spaceOptions.xs}
                colorWab={greyOptions.grey30}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </Card>
    ));
