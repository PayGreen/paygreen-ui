import React from 'react';
import Text from './Text';
import {
    textHtmlTagOptions,
    blockPaddingOptions,
    blockPaddingDefault,
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('Text', module)
    .addDecorator(withKnobs)
    .add('Single paragraph', () => (
        <Text
            paddingBlock={select('Block\'s padding', blockPaddingOptions, blockPaddingDefault)}
            marginBlock={select('Block\'s margin', spaceOptions, spaceDefault)}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla in libero laoreet sodales. Fusce vestibulum at neque nec convallis. Vivamus quis neque vulputate, fringilla massa vitae, interdum ipsum. Duis enim augue, euismod quis aliquam in, consequat quis risus.
        </Text>
    ), {
        notes: 'Text.',
    })
    .add('Block of paragraphs', () => (
        <Text
            textHtmlTag={textHtmlTagOptions.div}
            paddingBlock={select('Block\'s padding', blockPaddingOptions, blockPaddingDefault)}
            marginBlock={select('Block\'s margin', spaceOptions, spaceDefault)}
            marginInternal={select('Internal margin', spaceOptions, spaceOptions.sm)}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla in libero laoreet sodales. Fusce vestibulum at neque nec convallis. Vivamus quis neque vulputate, fringilla massa vitae, interdum ipsum. Duis enim augue, euismod quis aliquam in, consequat quis risus.
            </p>

            <p>
                Etiam diam elit, fringilla sit amet blandit sit amet, rutrum varius est. Integer gravida vel urna nec interdum. Suspendisse vel quam et libero pellentesque aliquet. Sed est velit, dignissim eget nunc a, ornare tempor odio. In efficitur, leo in vestibulum posuere, tellus enim porttitor nisl, a tincidunt mauris quam sit amet mi.
            </p>

            <p>
                Nam rhoncus ligula posuere justo consequat condimentum. Suspendisse nunc nulla, pellentesque at tellus et, hendrerit facilisis dolor. Sed a dignissim mauris.
            </p>
        </Text>
    ), {
        notes: 'Text.',
    });