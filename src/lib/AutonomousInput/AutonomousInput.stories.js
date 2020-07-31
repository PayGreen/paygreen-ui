import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import label from '../../shared/labels';
import AutonomousInput from './AutonomousInput';

storiesOf(folder.form + folder.sub.form + 'AutonomousInput', module)
    .addDecorator(withKnobs)
    .add('AutonomousInput', () => (
        <AutonomousInput
            type="email"
            placeholder={text(label.placeholder, 'Your email...')}
            submittedText={text('Submitted text', 'Received!')}
            status={radios(label.status, formStatusOptions, formStatusDefault)}
        >
            <button type="submit">
                {text('Default button label', 'Send')}
            </button>
        </AutonomousInput>
    ));
