import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import Radio from './Radio';

storiesOf(folder.form + 'Radio', module)
    .addDecorator(withKnobs)
    .add(
        'Radio',
        () => (
            <Radio
                defaultValue=""
                id="first"
                value="first"
                name=""
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                fieldSize={radios(
                    'Field size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                label="FirstChoice"
            />
        ),
        {
            notes: '',
        },
    );
