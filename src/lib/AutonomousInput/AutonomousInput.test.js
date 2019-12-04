import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { formStatusOptions } from '../../shared/constants';
import AutonomousInput from './AutonomousInput';

it('renders without crashing', () => {
    const autonomousInput = TestRenderer.create(
        <AutonomousInput
            status={formStatusOptions.success}
            placeholder="Your email..."
            submittedLabel="Received!"
            type="email"
            theme={ThemeDefault}
        >
            <button type="submit">
                Send
            </button>
        </AutonomousInput>
    );
    expect(autonomousInput.toJSON()).toMatchSnapshot();
});