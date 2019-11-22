import React from 'react';
import AutonomousInput from './AutonomousInput';
import {

} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('AutonomousInput', module)
    .addDecorator(withKnobs)
    .add('AutonomousInput', () => (
        <AutonomousInput
            
        >
            <input type="email" placeholder="Your email..." />

            <button type="button">Send</button>
        </AutonomousInput>
    ), {
        notes: 'AutonomousInput.',
    });