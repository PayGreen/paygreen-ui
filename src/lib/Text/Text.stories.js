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
import Text from './Text';
import HR from '../HR/HR';

const { div, p, span, ...inlineHtmlTagOptions } = textHtmlTagOptions;

const colorTypeLabel = 'Color type';
const colorThemeLabel = 'Color theme';
const colorPalletLabel = 'Color pallet';
const colorWabLabel = 'Grey color';
const colorStatusLabel = 'Status color';
const textSizeLabel = 'Size';
const alignLabel = 'Align';
const lateralMarginLabel = 'Block lateral margins';
const topMarginLabel = 'Block margin top';
const bottomMarginLabel = 'Block margin bottom';

storiesOf(folder.text + 'Text', module)
    .addDecorator(withKnobs)
    .add('Single paragraph', () => (
        <Text
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
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey60)}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            textSize={select(textSizeLabel, fontSizeOptions, fontSizeDefault)}
            align={radios(alignLabel, alignOptions, alignDefault)}
            hasUppercase={boolean('Uppercase', false)}
            hasUnderline={boolean('Underline', false)}
            marginLateral={select(
                lateralMarginLabel,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(topMarginLabel, spaceOptions, spaceDefault)}
            marginBottom={select(bottomMarginLabel, spaceOptions, spaceDefault)}
        >
            Lorem ipsum dolor sit amet, consectetur{' '}
            <strong>adipiscing elit</strong>. Donec eget{' '}
            <em>nulla in libero</em> laoreet sodales. Fusce vestibulum at neque
            nec convallis. Vivamus quis neque vulputate, fringilla massa vitae,
            interdum ipsum. Duis enim augue, euismod quis aliquam in, consequat
            quis risus.
        </Text>
    ))
    .add('Block of paragraphs', () => (
        <Text
            htmlTag={textHtmlTagOptions.div}
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
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey60)}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            textSize={select(textSizeLabel, fontSizeOptions, fontSizeDefault)}
            align={radios(alignLabel, alignOptions, alignDefault)}
            marginLateral={select(
                lateralMarginLabel,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(topMarginLabel, spaceOptions, spaceDefault)}
            marginBottom={select(bottomMarginLabel, spaceOptions, spaceDefault)}
            marginInternal={select(
                'Internal margin',
                spaceOptions,
                spaceOptions.sm,
            )}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur{' '}
                <strong>adipiscing elit</strong>. Donec eget nulla in libero
                laoreet sodales. Fusce vestibulum at neque nec convallis.
                Vivamus quis neque vulputate, fringilla massa vitae, interdum
                ipsum. Duis enim augue, euismod quis aliquam in, consequat quis
                risus.
            </p>

            <p>
                Etiam diam elit, fringilla sit amet blandit sit amet,{' '}
                <em>rutrum varius est</em>. Integer gravida vel urna nec
                interdum. Suspendisse vel quam et libero pellentesque aliquet.
                Sed est velit, dignissim eget nunc a, ornare tempor odio. In
                efficitur, leo in vestibulum posuere, tellus enim porttitor
                nisl, a tincidunt mauris quam sit amet mi.
            </p>

            <p>
                Nam rhoncus ligula posuere justo consequat. Suspendisse nunc
                nulla, pellentesque at tellus et, hendrerit facilisis dolor. Sed
                a dignissim mauris.
            </p>
        </Text>
    ))
    .add('Text with background', () => (
        <Text
            colorType={radios(
                colorTypeLabel,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorPallet={radios(
                colorPalletLabel,
                colorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey50)}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            hasBackground={true}
            radiusSize={radios('Radius size', radiusOptions, radiusOptions.sm)}
            paddingLateral={spaceOptions.lg}
            paddingTop={spaceOptions.lg}
            paddingBottom={spaceOptions.lg}
            marginLateral={spaceOptions.sm}
            marginTop={spaceOptions.sm}
            marginBottom={spaceOptions.sm}
        >
            Lorem ipsum dolor sit amet, consectetur{' '}
            <strong>adipiscing elit</strong>. Donec eget nulla in libero laoreet
            sodales. Fusce vestibulum at neque nec convallis. Vivamus quis neque
            vulputate, fringilla massa vitae, interdum ipsum. Duis enim augue,
            euismod quis aliquam in, consequat quis risus.
        </Text>
    ))
    .add('Inline styles', () => (
        <>
            <Text
                htmlTag={textHtmlTagOptions.em}
                marginLateral={spaceOptions.sm}
                marginTop={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
            >
                Emphasis Text
            </Text>

            <Text
                htmlTag={textHtmlTagOptions.strong}
                marginLateral={spaceOptions.sm}
                marginTop={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
            >
                Strong Text
            </Text>

            <Text
                htmlTag={textHtmlTagOptions.q}
                marginLateral={spaceOptions.sm}
                marginTop={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
            >
                Quote Text
            </Text>

            <Text
                htmlTag={textHtmlTagOptions.sub}
                marginLateral={spaceOptions.sm}
                marginTop={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
            >
                Subscript Text
            </Text>

            <Text
                htmlTag={textHtmlTagOptions.kbd}
                marginLateral={spaceOptions.sm}
                marginTop={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
            >
                KeyBoard Text
            </Text>

            <HR
                marginLateral={spaceOptions.sm}
                marginBottom={spaceOptions.md}
                colorPallet={colorPalletOptions.wab}
                colorWab={greyOptions.grey40}
            />

            <Text
                htmlTag={select(
                    'Html tags',
                    inlineHtmlTagOptions,
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
                {text('Text', 'Try Me!')}
            </Text>
        </>
    ));
