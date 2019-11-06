import React from 'react';
import Textarea from './Textarea';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

storiesOf('Textarea', module)
    .addDecorator(withKnobs)
    .add('Textarea', () => (
        <Textarea
            id="textarea1"
            placeholder="Your text&hellip;"
            label="Your message"
            maxLength={50}
            status={radios('State', formStatusOptions, formStatusDefault)}
            params={{
                shadow: boolean('With shadow', false),
                counter: boolean('With counter', true)
            }}
            disabled={boolean('Disabled', false)}
        />
    ), {
        notes: 'Textarea field comes with a characters counter. Color of the counter changes to green when characters\' counter reaches the minlength, and it changes to orange when characters\' number exceeds the 90% of maxlength. By default, counter is dismissed.',
    });