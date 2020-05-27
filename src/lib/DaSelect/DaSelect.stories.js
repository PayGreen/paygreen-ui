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
import DaSelect from './DaSelect';

const options = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        value: 'first',
        text: 'First option',
    },
    {
        value: 'second',
        text: 'Second option',
    },
    {
        value: 'third',
        text: 'Third option',
    },
];

storiesOf(folder.form + 'DaSelect', module)
    .addDecorator(withKnobs)
    .add(
        'DaSelect',
        () => (
            <DaSelect
                id="select1"
                label={text('Label', 'Your choice')}
                defaultValue=""
                options={options}
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                status={radios('Status', formStatusOptions, formStatusDefault)}
                blockWidth={radios(
                    'Width',
                    inputWidthOptions,
                    inputWidthDefault,
                )}
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
                'You can change select width with "blockWidth" props.',
        },
    );
