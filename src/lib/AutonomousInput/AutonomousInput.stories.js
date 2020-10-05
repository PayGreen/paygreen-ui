import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import AutonomousInput from './AutonomousInput';

storiesOf(folder.form + folder.sub.form + 'AutonomousInput', module)
    .addDecorator(withKnobs)
    .add('AutonomousInput', () => (
        <AutonomousInput
            type="email"
            placeholder={text('Placeholder', 'Your email...')}
            submittedText={text('Submitted label', 'Received!')}
            status={radios('Status', formStatusOptions, formStatusDefault)}
        >
            <button type="submit">
                {text('Default button label', 'Send')}
            </button>
        </AutonomousInput>
    ));
