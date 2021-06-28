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
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Input from './Input';

storiesOf(folder.form + 'Input', module)
    .addDecorator(withKnobs)
    .add('Text', () => (
        <Input
            id="sampleId1"
            placeholder="Firstname Lastname"
            label={text(labels.label, 'Your name')}
            disabled={boolean(labels.disabled, false)}
            readOnly={boolean(labels.readOnly, false)}
            status={radios(labels.status, formStatusOptions, formStatusDefault)}
            hasShadow={boolean(labels.hasShadow, false)}
            blockWidth={radios(
                labels.blockWidth,
                inputWidthOptions,
                inputWidthDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceOptions.md)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ))
    .add('Tel', () => (
        <Input
            type="tel"
            id="sampleId2"
            placeholder="+33 (0)6 11 22 33 44"
            label={text(labels.label, 'Phone number')}
            disabled={boolean(labels.disabled, false)}
            readOnly={boolean(labels.readOnly, false)}
            status={radios(labels.status, formStatusOptions, formStatusDefault)}
            hasShadow={boolean(labels.hasShadow, false)}
            marginTop={select(labels.marginTop, spaceOptions, spaceOptions.md)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ));
