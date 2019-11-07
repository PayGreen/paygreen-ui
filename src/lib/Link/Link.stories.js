import React from 'react';
import Link from './Link';
import {
    colorThemeOptions,
    colorThemeDefault,
    colorTypeOptions,
    colorTypeDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

storiesOf('Link', module)
    .addDecorator(withKnobs)
    .add('Link', () => (
        <p>
            <a href="#">
            <Link
                colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
                colorTheme={radios('Color theme', colorThemeOptions, colorThemeDefault)}
            >
                {text('Label', 'Link text')}
            </Link></a> curabitur congue varius ex et posuere. Maecenas tincidunt diam ut nisl porttitor scelerisque. Donec egestas elit dolor, quis eleifend ipsum sagittis ut. Proin molestie lorem et neque tempus tristique. Mauris finibus dui sem, nec suscipit mi porta a.
        </p>
    ), {
        notes: 'Link should be used inside <code>&lt;p&gt;</code> tags, with text around.',
    });