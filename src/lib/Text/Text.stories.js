import React from 'react';
import Text from './Text';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,

    radiusOptions,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    textHtmlTagOptions,
    blockSpaceOptions,
    blockSpaceDefault,
    spaceOptions,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select, boolean } from '@storybook/addon-knobs';

storiesOf('Text', module)
    .addDecorator(withKnobs)
    .add('Single paragraph', () => (
        <Text
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorPallet={radios('Color pallet', colorPalletOptions, colorPalletOptions.wab)}
            colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
            colorWab={select('Grey color', greyOptions, greyOptions.grey60)}
            colorStatus={select('Status color', formStatusOptions, formStatusDefault)}

            textSize={select('Size', fontSizeOptions, fontSizeDefault)}
            textAlign={radios('Align', alignOptions, alignDefault)}
            underline={boolean('Underline', false)}
            paddingBottom={blockSpaceOptions.sm}

            marginLateral={select('Block\'s lateral margins', blockSpaceOptions, blockSpaceDefault)}
            marginTop={select('Block\'s margin top', blockSpaceOptions, blockSpaceDefault)}
            marginBottom={select('Block\'s margin bottom', blockSpaceOptions, blockSpaceDefault)}
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
            colorPallet={radios('Color pallet', colorPalletOptions, colorPalletOptions.wab)}
            colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
            colorWab={select('Grey color', greyOptions, greyOptions.grey60)}
            colorStatus={select('Status color', formStatusOptions, formStatusDefault)}

            textSize={select('Size', fontSizeOptions, fontSizeDefault)}
            textAlign={radios('Align', alignOptions, alignDefault)}
            underline={boolean('Underline', false)}
            paddingBottom={blockSpaceOptions.sm}

            marginLateral={select('Block\'s lateral margins', blockSpaceOptions, blockSpaceDefault)}
            marginTop={select('Block\'s margin top', blockSpaceOptions, blockSpaceDefault)}
            marginBottom={select('Block\'s margin bottom', blockSpaceOptions, blockSpaceDefault)}
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
    .add('Quote or emphasis', () => (
        <Text
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorPallet={radios('Color pallet', colorPalletOptions, colorPalletDefault)}
            colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
            colorWab={select('Grey color', greyOptions, greyDefault)}
            colorStatus={select('Status color', formStatusOptions, formStatusDefault)}

            hasBackground={true}
            radiusSize={radios('Radius size', radiusOptions, radiusOptions.sm)}

            paddingLateral={blockSpaceOptions.lg}
            paddingTop={blockSpaceOptions.lg}
            paddingBottom={blockSpaceOptions.lg}

            marginLateral={blockSpaceOptions.sm}
            marginTop={blockSpaceOptions.sm}
            marginBottom={blockSpaceOptions.sm}
        >
            Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Donec eget nulla in libero laoreet sodales. Fusce vestibulum at neque nec convallis. Vivamus quis neque vulputate, fringilla massa vitae, interdum ipsum. Duis enim augue, euismod quis aliquam in, consequat quis risus.
        </Text>
    ), {
        notes: 'You can change background-color, border-radius, text color, margins and paddings on your Text component.',
    });