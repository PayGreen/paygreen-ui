import React from 'react';
import Link from './Link';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

storiesOf('Link', module)
    .addDecorator(withKnobs)
    .add('Link', () => (
        <Link
        >
            {text('Label', 'Link text')}
        </Link>
    ), {
        notes: 'Notes for link.',
    });