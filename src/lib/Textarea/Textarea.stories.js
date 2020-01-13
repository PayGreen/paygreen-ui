import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    radios,
    select,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
} from '../../shared/constants';
import Textarea from './Textarea';

storiesOf(folder.form + 'Paygreen | Forms/Textarea', module)
    .addDecorator(withKnobs)
    .add(
        'Textarea',
        () => (
            <Textarea
                id="textarea1"
                placeholder="Your text&hellip;"
                label={text('Label', 'Your message')}
                maxLength={50}
                status={radios('Status', formStatusOptions, formStatusDefault)}
                hasCounter={boolean('With counter', true)}
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                hasShadow={boolean('With shadow', false)}
                marginTop={select('Margin top', spaceOptions, spaceOptions.md)}
                marginBottom={select(
                    'Margin bottom',
                    spaceOptions,
                    spaceOptions.md,
                )}
            />
        ),
        {
            notes:
                "Textarea field comes with a characters counter. Counter's color changes to green when the number of the characters reaches the minlength. Counter's color changes to orange when characters' number exceeds the 90% of maxlength. By default, counter is dismissed.",
        },
    );
