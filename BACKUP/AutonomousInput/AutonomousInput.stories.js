import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import AutonomousInput from './AutonomousInput';

storiesOf(folder.form + 'AutonomousInput', module)
    .addDecorator(withKnobs)
    .add('AutonomousInput', () => (
        <AutonomousInput
            type="email"
            placeholder="Your email..."
            submittedText={text('Submitted text', 'Received!')}
            status={radios(labels.status, formStatusOptions, formStatusDefault)}
        >
            <button type="submit">{text(labels.label, 'Send')}</button>
        </AutonomousInput>
    ));
