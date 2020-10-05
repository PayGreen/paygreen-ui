import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, text } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import CheckboxGroup from './CheckboxGroup';

const checkboxOptions = [
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

storiesOf(folder.form + folder.sub.checkbox + 'CheckboxGroup', module)
    .addDecorator(withKnobs)
    .add('CheckboxGroup', () => (
        <CheckboxGroup
            name="checkboxes"
            legend={text('Checkboxes Label', 'Checkboxes Label')}
            value={checkboxOptions[1].value}
            options={checkboxOptions}
            disabled={boolean('Disabled', false)}
            fieldSize={radios(
                'Field size',
                buttonSizeOptions,
                buttonSizeDefault,
            )}
        />
    ));
