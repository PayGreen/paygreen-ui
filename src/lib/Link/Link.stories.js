import React from 'react';
import Link from './Link';
import { colorOptions, colorDefault } from '../../shared/const';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

storiesOf('Link', module)
    .addDecorator(withKnobs)
    .add('Link', () => (
        <p>
            <Link
                color={radios('Color', colorOptions, colorDefault)}
            >
                {text('Label', 'Link text')}
            </Link> curabitur congue varius ex et posuere. Maecenas tincidunt diam ut nisl porttitor scelerisque. Donec egestas elit dolor, quis eleifend ipsum sagittis ut. Proin molestie lorem et neque tempus tristique. Mauris finibus dui sem, nec suscipit mi porta a.
        </p>
    ), {
        notes: 'Notes for link.',
    });