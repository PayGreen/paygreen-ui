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
    .add('Radio', () => (
        <Radio
            id="first"
            label="First Choice"
            disabled={boolean('Disabled', false)}
            fieldSize={radios(
                'Field size',
                buttonSizeOptions,
                buttonSizeDefault,
            )}
        />
    ));
