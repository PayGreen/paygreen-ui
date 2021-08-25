import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Checkbox from './Checkbox';

storiesOf(folder.form + folder.sub.checkbox + 'Checkbox', module)
    .addDecorator(withKnobs)
    .add('Checkbox', () => (
        <Checkbox
            id="first"
            label="First Choice"
            value="first"
            disabled={boolean(labels.disabled, false)}
            fieldSize={radios(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
        />
    ));
