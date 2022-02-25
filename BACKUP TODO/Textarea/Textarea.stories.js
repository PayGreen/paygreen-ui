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
import labels from '../../shared/labels';
import Textarea from './Textarea';

storiesOf(folder.form + 'Textarea', module)
    .addDecorator(withKnobs)
    .add('Textarea', () => (
        <Textarea
            id="textarea1"
            placeholder="Your text&hellip;"
            label={text(labels.label, 'Your message')}
            maxLength={50}
            status={radios(labels.status, formStatusOptions, formStatusDefault)}
            hasCounter={boolean(labels.hasCounter, true)}
            disabled={boolean(labels.disabled, false)}
            readOnly={boolean(labels.readOnly, false)}
            hasShadow={boolean(labels.hasShadow, false)}
            marginTop={select(labels.marginTop, spaceOptions, spaceOptions.md)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ));
