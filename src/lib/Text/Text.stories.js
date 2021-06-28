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
import labels from '../../shared/labels';
import HR from '../HR/HR';
import Text from './Text';

const { div, p, span, ...inlineHtmlTagOptions } = textHtmlTagOptions;

storiesOf(folder.text + 'Text', module)
    .addDecorator(withKnobs)
    .add('Single paragraph', () => (
        <Text
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
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
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey60)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            textSize={select(labels.textSize, fontSizeOptions, fontSizeDefault)}
            align={radios(labels.align, alignOptions, alignDefault)}
            hasUppercase={boolean(labels.hasUppercase, false)}
            hasUnderline={boolean(labels.hasUnderline, false)}
            marginLateral={select(
                labels.marginLateral,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(labels.marginBottom, spaceOptions, spaceDefault)}
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
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
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
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey60)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            textSize={select(labels.textSize, fontSizeOptions, fontSizeDefault)}
            align={radios(labels.align, alignOptions, alignDefault)}
            marginLateral={select(
                labels.marginLateral,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(labels.marginBottom, spaceOptions, spaceDefault)}
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
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorPallet={radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey50)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            hasBackground={true}
            radiusSize={radios(labels.radiusSize, radiusOptions, radiusOptions.sm)}
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
                    labels.htmlTag,
                    inlineHtmlTagOptions,
                    textHtmlTagOptions.em,
                )}
                colorType={radios(
                    labels.colorType,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
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
                colorWab={select(
                    labels.colorWab,
                    greyOptions,
                    greyOptions.grey60,
                )}
                colorStatus={select(
                    labels.colorStatus,
                    formStatusOptions,
                    formStatusDefault,
                )}
                marginLateral={spaceOptions.sm}
                textSize={select(
                    labels.textSize,
                    fontSizeOptions,
                    fontSizeDefault,
                )}
            >
                {text(labels.text, 'Try Me!')}
            </Text>
        </>
    ));
