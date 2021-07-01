import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, text } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
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
            legend={text(labels.label, 'Checkboxes Label')}
            value={checkboxOptions[1].value}
            options={checkboxOptions}
            disabled={boolean(labels.disabled, false)}
            fieldSize={radios(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
        />
    ));
