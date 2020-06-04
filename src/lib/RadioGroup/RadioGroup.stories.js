import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import RadioGroup from './RadioGroup';

const radioOptions = [
    {
        id: 'first',
        label: 'First Choice',
        value: 'first',
        checked: 'true',
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

storiesOf(folder.form + folder.sub.radio + 'RadioGroup', module)
    .addDecorator(withKnobs)
    .add(
        'RadioGroup',
        () => (
            <RadioGroup
                radioOptions={radioOptions}
                radioName='Radio Name'
                legend='Radio Label'
                defaultValue='second'
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
            notes: 'You can change radiogroup items size with "fieldSize" props.',
        },
    );
