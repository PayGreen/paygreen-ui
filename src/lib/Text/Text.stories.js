import React from 'react';
import Text from './Text';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    transparentColorOptions,
    transparentColorDefault,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    textHtmlTagOptions,
    blockPaddingOptions,
    blockPaddingDefault,
    spaceOptions
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';

storiesOf('Text', module)
    .addDecorator(withKnobs)
    .add('Single paragraph', () => (
        <Text
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            mainColor={select('Main color', greyOptions, greyOptions.grey60)}
            colorTheme={radios('Color of <strong>', colorThemeOptions, colorThemeDefault)}
            backgroundColor={radios('Background-color', transparentColorOptions, transparentColorDefault)}
            textSize={select('Size', fontSizeOptions, fontSizeDefault)}
            textAlign={radios('Align', alignOptions, alignDefault)}
            paddingBlock={select('Block\'s padding', blockPaddingOptions, blockPaddingDefault)}
            paddingTop={select('Padding top', blockPaddingOptions, blockPaddingDefault)}
            paddingBottom={select('Padding bottom', blockPaddingOptions, blockPaddingDefault)}
            marginTop={select('Block\'s margin top', blockPaddingOptions, blockPaddingDefault)}
            marginBottom={select('Block\'s margin bottom', blockPaddingOptions, blockPaddingDefault)}
        >
            Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Donec eget <em>nulla in libero</em> laoreet sodales. Fusce vestibulum at neque nec convallis. Vivamus quis neque vulputate, fringilla massa vitae, interdum ipsum. Duis enim augue, euismod quis aliquam in, consequat quis risus.
        </Text>
    ), {
        notes: 'Text component must be used to adding any text without specific component, or inside components like Card.',
    })
    .add('Block of paragraphs', () => (
        <Text
            textHtmlTag={textHtmlTagOptions.div}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            mainColor={select('Main color', greyOptions, greyOptions.grey60)}
            colorTheme={radios('Color of <strong>', colorThemeOptions, colorThemeDefault)}
            backgroundColor={radios('Background-color', transparentColorOptions, transparentColorDefault)}
            textSize={select('Size', fontSizeOptions, fontSizeDefault)}
            textAlign={radios('Align', alignOptions, alignDefault)}
            paddingBlock={select('Left and right padding', blockPaddingOptions, blockPaddingDefault)}
            paddingTop={select('Padding top', blockPaddingOptions, blockPaddingDefault)}
            paddingBottom={select('Padding bottom', blockPaddingOptions, blockPaddingDefault)}
            marginTop={select('Block\'s margin top', blockPaddingOptions, blockPaddingDefault)}
            marginBottom={select('Block\'s margin bottom', blockPaddingOptions, blockPaddingDefault)}
            marginInternal={select('Internal margin', spaceOptions, spaceOptions.sm)}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Donec eget nulla in libero laoreet sodales. Fusce vestibulum at neque nec convallis. Vivamus quis neque vulputate, fringilla massa vitae, interdum ipsum. Duis enim augue, euismod quis aliquam in, consequat quis risus.
            </p>

            <p>
                Etiam diam elit, fringilla sit amet blandit sit amet, <em>rutrum varius est</em>. Integer gravida vel urna nec interdum. Suspendisse vel quam et libero pellentesque aliquet. Sed est velit, dignissim eget nunc a, ornare tempor odio. In efficitur, leo in vestibulum posuere, tellus enim porttitor nisl, a tincidunt mauris quam sit amet mi.
            </p>

            <p>
                Nam rhoncus ligula posuere justo consequat. Suspendisse nunc nulla, pellentesque at tellus et, hendrerit facilisis dolor. Sed a dignissim mauris.
            </p>
        </Text>
    ), {
        notes: 'If you want to add more than paragraph, put your text inside <code>&lt;p&gt;</code> tags and pass textHtmlTag prop to "div".',
    })
    .add('Paragraph with background', () => (
        <Text
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorTheme={radios('Color of <strong>', colorThemeOptions, colorThemeDefault)}
            backgroundColor={transparentColorOptions.theme}
            paddingBlock={blockPaddingOptions.lg}
            paddingTop={blockPaddingOptions.lg}
            paddingBottom={blockPaddingOptions.lg}
        >
            Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Donec eget nulla in libero laoreet sodales. Fusce vestibulum at neque nec convallis. Vivamus quis neque vulputate, fringilla massa vitae, interdum ipsum. Duis enim augue, euismod quis aliquam in, consequat quis risus.
        </Text>
    ), {
        notes: 'You can add background-color, margins and paddings on your Text component.',
    });