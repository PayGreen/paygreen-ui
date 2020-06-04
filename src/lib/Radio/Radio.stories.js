import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import Radio from './Radio';

storiesOf(folder.form + folder.sub.radio + 'Radio', module)
    .addDecorator(withKnobs)
    .add(
        'Radio',
        () => (
            <Radio
                defaultValue=""
                radioId="first"
                radioValue="first"
                radioName="test"
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                fieldSize={radios(
                    'Field size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                radioLabel="FirstChoice"
            />
        ),
        {
            notes: '',
        },
    );
