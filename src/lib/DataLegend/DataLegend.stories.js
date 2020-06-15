import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    radios,
    select,
    boolean,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    formStatusOptions,
    formStatusDefault,
    radiusOptions,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    textHtmlTagOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import DataLegend from './DataLegend';
import HR from '../HR/HR';

const { div, p, span, ...newHtmlTagOptions } = textHtmlTagOptions;

const colorTypeLabel = 'Color type';
const colorThemeLabel = 'Color theme';
const colorPalletLabel = 'Color pallet';
const colorWabLabel = 'Grey color';
const colorStatusLabel = 'Status color';
const textSizeLabel = 'Size';
const alignLabel = 'Align';
const lateralMarginLabel = "Block's lateral margins";
const topMarginLabel = "Block's margin top";
const bottomMarginLabel = "Block's margin bottom";

storiesOf(folder.main + 'DataLegend', module)
    .addDecorator(withKnobs)
    .add(
        'Single paragraph',
        () => (
            <DataLegend
                colorType={radios(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
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
                colorWab={select(
                    colorWabLabel,
                    greyOptions,
                    greyOptions.grey60,
                )}
                colorStatus={select(
                    colorStatusLabel,
                    formStatusOptions,
                    formStatusDefault,
                )}
                textSize={select(
                    textSizeLabel,
                    fontSizeOptions,
                    fontSizeDefault,
                )}
                flexDirection={select(
                    'Flex direction',
                    flexDirectionOptions,
                    flexDirectionDefault,
                )}
                align={radios(alignLabel, alignOptions, alignDefault)}
                marginLateral={select(
                    lateralMarginLabel,
                    spaceOptions,
                    spaceDefault,
                )}
                marginTop={select(topMarginLabel, spaceOptions, spaceDefault)}
                marginBottom={select(
                    bottomMarginLabel,
                    spaceOptions,
                    spaceDefault,
                )}
            >
                Lorem ipsum dolor sit amet, consectetur{' '}
                <strong>adipiscing elit</strong>. Donec eget{' '}
                <em>nulla in libero</em> laoreet sodales. Fusce vestibulum at
                neque nec convallis. Vivamus quis neque vulputate, fringilla
                massa vitae, interdum ipsum. Duis enim augue, euismod quis
                aliquam in, consequat quis risus.
            </DataLegend>
        ),
        {
            notes:
                'DataLegend component must be used to adding any text without specific component, or inside components like Card.',
        },
    )
    .add(
        'New styled html tags',
        () => (
            <>
                <DataLegend
                    htmlTag={textHtmlTagOptions.em}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    Emphasis DataLegend
                </DataLegend>

                <DataLegend
                    htmlTag={textHtmlTagOptions.strong}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    Strong DataLegend
                </DataLegend>

                <DataLegend
                    htmlTag={textHtmlTagOptions.q}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    Quote DataLegend
                </DataLegend>

                <DataLegend
                    htmlTag={textHtmlTagOptions.sub}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    Subscript DataLegend
                </DataLegend>

                <DataLegend
                    htmlTag={textHtmlTagOptions.kbd}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    KeyBoard DataLegend
                </DataLegend>

                <HR
                    marginLateral={spaceOptions.sm}
                    marginBottom={spaceOptions.md}
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                />

                <DataLegend
                    htmlTag={select(
                        'Html tags',
                        newHtmlTagOptions,
                        textHtmlTagOptions.em,
                    )}
                    colorType={radios(
                        colorTypeLabel,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
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
                    colorWab={select(
                        colorWabLabel,
                        greyOptions,
                        greyOptions.grey60,
                    )}
                    colorStatus={select(
                        colorStatusLabel,
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    marginLateral={spaceOptions.sm}
                    textSize={select(
                        textSizeLabel,
                        fontSizeOptions,
                        fontSizeDefault,
                    )}
                >
                    {text('DataLegend', 'Try Me!')}
                </DataLegend>
            </>
        ),

        {
            notes:
                'Switch between all html tags available, for each you can change background-color, text color & text size.',
        },
    );
