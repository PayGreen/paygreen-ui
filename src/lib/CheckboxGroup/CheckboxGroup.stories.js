import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import CheckboxGroup from './CheckboxGroup';

const checkboxOptions = [
    {
        id: 'first',
        label: 'First Choice',
        value: 'first',
    },
    {
        id: 'second',
        label: 'Second Choice',
        value: 'second',
    },
    {
        id: 'third',
        label: 'Third Choice',
        value: 'third',
    },
];

storiesOf(folder.form + folder.sub.checkbox + 'CheckboxGroup', module)
    .addDecorator(withKnobs)
    .add(
        'CheckboxGroup',
        () => (
            <CheckboxGroup
                checkboxOptions={checkboxOptions}
                checkboxName="Checkbox Name"
                legend="Checkbox Label"
                defaultValue="second"
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                fieldSize={radios(
                    'Field size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
            />
        ),
        {
            notes:
                'You can change all radiogroup items size with "fieldSize" props.',
        },
    );
