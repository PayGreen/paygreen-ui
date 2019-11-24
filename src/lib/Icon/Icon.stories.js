import React from 'react';
import { ArrowBottomIcon, CodeIcon } from './Icon';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

storiesOf('Icons', module)
    .addDecorator(withKnobs)
    .add('Fill', () => (
        <div>
            <ArrowBottomIcon size="md" fill="red" />
            <CodeIcon size="md" fill="red" />
        </div>
    ), {
            notes: 'Icons',
        });