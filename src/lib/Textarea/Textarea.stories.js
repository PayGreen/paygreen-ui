import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select, text } from '@storybook/addon-knobs';
import {
    formStatusOptions,
    formStatusDefault,
    blockSpaceOptions
} from '../../shared/constants';
import Textarea from './Textarea';

storiesOf('Textarea', module).addDecorator(withKnobs)
.add('Textarea', () => (
    <Textarea
        id="textarea1"
        placeholder="Your text&hellip;"
        label={text('Label', 'Your message')}
        maxLength={50}
        status={radios('Status', formStatusOptions, formStatusDefault)}
        params={{
            shadow: boolean('With shadow', false),
            counter: boolean('With counter', true)
        }}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Readonly', false)}
        marginTop={select('Margin top', blockSpaceOptions, blockSpaceOptions.md)}
        marginBottom={select('Margin bottom', blockSpaceOptions, blockSpaceOptions.md)}
    />
), {
    notes: 'Textarea field comes with a characters counter. Counter\'s color changes to green when the number of the characters reaches the minlength. Counter\'s color changes to orange when characters\' number exceeds the 90% of maxlength. By default, counter is dismissed.',
});