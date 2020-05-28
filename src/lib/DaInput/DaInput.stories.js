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
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import DaInput from './DaInput';

storiesOf(folder.form + 'DaInput', module)
    .addDecorator(withKnobs)
    .add(
        'Text',
        () => (
            <DaInput
                id="sampleId1"
                placeholder="Firstname Lastname"
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                status={radios('Status', formStatusOptions, formStatusDefault)}
                marginTop={select('Margin top', spaceOptions, spaceOptions.md)}
                marginBottom={select(
                    'Margin bottom',
                    spaceOptions,
                    spaceOptions.md,
                )}
                fieldSize={radios(
                    'Field size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                hasHelpButton={boolean('Help button', false)}
            />
        ),
        {
            notes:
                'Same as input email, url and number (this is the default style).',
        },
    )
    .add(
        'Tel',
        () => (
            <DaInput
                type="tel"
                id="sampleId2"
                placeholder="+33 (0)6 11 22 33 44"
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                status={radios('Status', formStatusOptions, formStatusDefault)}
                marginTop={select('Margin top', spaceOptions, spaceOptions.md)}
                marginBottom={select(
                    'Margin bottom',
                    spaceOptions,
                    spaceOptions.md,
                )}
                fieldSize={radios(
                    'Field size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
            />
        ),
        {
            notes:
                'Style for input tel. It is smaller than default input because its value is always short. Input tel comes with react-input-mask library.',
        },
    );
