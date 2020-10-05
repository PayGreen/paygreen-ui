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
import Input from './Input';

storiesOf(folder.form + 'Input', module)
    .addDecorator(withKnobs)
    .add('Text', () => (
        <Input
            id="sampleId1"
            placeholder="Firstname Lastname"
            label={text('Label', 'Your name')}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            status={radios('Status', formStatusOptions, formStatusDefault)}
            hasShadow={boolean('With shadow', false)}
            blockWidth={radios('Width', inputWidthOptions, inputWidthDefault)}
            marginTop={select('Margin top', spaceOptions, spaceOptions.md)}
            marginBottom={select(
                'Margin bottom',
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
            label={text('Your label', 'Phone number')}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            status={radios('Status', formStatusOptions, formStatusDefault)}
            hasShadow={boolean('With shadow', false)}
            marginTop={select('Margin top', spaceOptions, spaceOptions.md)}
            marginBottom={select(
                'Margin bottom',
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ));
