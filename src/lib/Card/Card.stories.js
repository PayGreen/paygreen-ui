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
} from '../../shared/constants';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Image from '../Image/Image';
import Popin from '../Popin/Popin';
import Text from '../Text/Text';
import Title from '../Title/Title';
import Corner from '../Corner/Corner';
import Card from './Card';
import imageFile from './sample/sample.png';

const colorTypeLabel = 'Color type';
const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';
const colorStatusLabel = 'Status color';
const blockWidthLabel = 'Width';
const borderRadiusLabel = 'Border radius';

storiesOf(folder.block + 'Card', module)
    .addDecorator(withKnobs)
    .add('Default card', () => (
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
            blockWidth={select(blockWidthLabel, spaceOptions, spaceOptions.md)}
            radiusSize={radios(borderRadiusLabel, radiusOptions, radiusDefault)}
            htmlTag={select(
                'HTML card tag',
                cardHtmlTagOptions,
                cardHtmlTagDefault,
            )}
        >
            <Corner
                label="Since 2016"
                colorStyle={colorStyleOptions.light}
                position={lateralPositionOptions.right}
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            />

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
                    spaceOptions.md,
                )}
                marginTop={select(
                    blockWidthLabel,
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
                    blockWidthLabel,
                    spaceOptions,
                    spaceOptions.md,
                )}
                marginBottom={select(
                    blockWidthLabel,
                    spaceOptions,
                    spaceOptions.md,
                )}
                paddingBlock={select(
                    blockWidthLabel,
                    spaceOptions,
                    spaceOptions.md,
                )}
                hasResetedMargins={false}
            >
                <button type="button">
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
                        Your button
                    </Button>
                </button>
            </ButtonGroup>
        </Card>
    ))
    .add('Border-top card', () => (
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
            blockWidth={spaceOptions.sm}
            radiusSize={radios(borderRadiusLabel, radiusOptions, radiusDefault)}
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
                        Your button
                    </Button>
                </button>
            </ButtonGroup>
        </Card>
    ))
    .add('Card with title out', () => (
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
            blockWidth={spaceOptions.sm}
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
                            Your button
                        </Button>
                    </button>
                </ButtonGroup>
            </div>
        </Card>
    ))
    .add('Card with image', () => (
        <Card
            blockWidth={select(blockWidthLabel, spaceOptions, spaceOptions.md)}
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
                    spaceOptions.md,
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
                    blockWidthLabel,
                    spaceOptions,
                    spaceOptions.md,
                )}
                paddingBlock={select(
                    blockWidthLabel,
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
            blockWidth={select(blockWidthLabel, spaceOptions, spaceOptions.md)}
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
                <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
                vehicula in arcu non sodales. Fusce et consectetur odio.
            </Text>
        </Card>
    ))
    .add('Card with colored background', () => (
        <Card
            colorPallet={radios(
                colorPalletLabel,
                colorPalletOptions,
                colorPalletOptions.wab,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.white20)}
            colorStatus={select(
                colorStatusLabel,
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
                        colorPalletLabel,
                        colorPalletOptions,
                        colorPalletOptions.wab,
                    ) === colorPalletOptions.wab
                        ? colorPalletOptions.theme
                        : radios(
                              colorPalletLabel,
                              colorPalletOptions,
                              colorPalletOptions.wab,
                          )
                }
                colorTheme={select(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorStatus={select(
                    colorStatusLabel,
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
                    colorPalletLabel,
                    colorPalletOptions,
                    colorPalletOptions.wab,
                )}
                colorTheme={select(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorStatus={select(
                    colorStatusLabel,
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
    ));
