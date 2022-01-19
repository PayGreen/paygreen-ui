import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, text } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
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
    .add('RadioGroup', () => (
        <RadioGroup
            name="radios"
            legend={text('Legend', 'Radios Label')}
            value={radioOptions[1].value}
            options={radioOptions}
            disabled={boolean(labels.disabled, false)}
            fieldSize={radios(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
        />
    ));
