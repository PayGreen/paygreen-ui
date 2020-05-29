import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTextarea from './DaTextarea';

it('renders without crashing', () => {
    const textarea = TestRenderer.create(
        <DaTextarea
            theme={ThemeDefault}
            id="textareaTest1"
            placeholder="Your text&hellip;"
            label="Your message"
            hasCounter={true}
        />
    );
    expect(textarea.toJSON()).toMatchSnapshot();
});