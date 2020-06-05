import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import Checkbox from './Checkbox';

storiesOf(folder.form + folder.sub.checkbox + 'Checkbox', module)
    .addDecorator(withKnobs)
    .add('Checkbox', () => (
        <Checkbox
            checkboxId="first"
            checkboxValue="first"
            checkboxName="test"
            checkboxDisabled={boolean('Disabled', false)}
            checkboxReadOnly={boolean('Readonly', false)}
            fieldSize={radios(
                'Field size',
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            checkboxLabel="First Choice"
            isChecked={boolean('Is checked', false)}
        />
    ));
