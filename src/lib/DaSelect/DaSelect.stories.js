import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    radios,
    select,
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
                defaultValue=""
                options={options}
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
                'You can change select width with "blockWidth" props.',
        },
    );
