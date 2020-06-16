import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, text } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import RadioGroup from './RadioGroup';

const radioOptions = [
    {
        label: 'First Choice',
        value: 'first',
    },
    {
        label: 'Second Choice',
        value: 'second',
    },
    {
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
                name="radios"
                legend={text('Radios Label', 'Radios Label')}
                value={radioOptions[1].value}
                options={radioOptions}
                disabled={boolean('Disabled', false)}
                fieldSize={radios(
                    'Field size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
            />
        ),
        {
            notes:
                'You can change Radiogroup items size with "fieldSize" props.',
        },
    );
