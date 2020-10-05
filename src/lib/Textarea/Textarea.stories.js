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

storiesOf(folder.form + 'Textarea', module)
    .addDecorator(withKnobs)
    .add('Textarea', () => (
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
    ));
