import React from 'react';
import AutonomousInput from './AutonomousInput';
import {
    formStatusOptions,
    formStatusDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

storiesOf('AutonomousInput', module)
    .addDecorator(withKnobs)
    .add('AutonomousInput', () => (
        <AutonomousInput
            status={radios('Status', formStatusOptions, formStatusDefault)}
            placeholder={text('Placeholder', 'Your email...')}
            submittedButton={text('Submitted button label', 'Received!')}
            type="email"
        >
            <button type="submit">
                {text('Default button label', 'Send')}
            </button>
        </AutonomousInput>
    ), {
        notes: 'AutonomousInput.',
    });