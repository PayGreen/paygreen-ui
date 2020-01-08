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
            type="email"
            placeholder={text('Placeholder', 'Your email...')}
            submittedText={text('Submitted label', 'Received!')}
            status={radios('Status', formStatusOptions, formStatusDefault)}
        >
            <button type="submit">
                {text('Default button label', 'Send')}
            </button>
        </AutonomousInput>
    ), {
        notes: 'AutonomousInput can be used for newsletter subscription. Success status meens field has been successfully submitted.',
    });