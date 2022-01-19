import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Textarea from './Textarea';

it('renders without crashing', () => {
    const textarea = TestRenderer.create(
        <Textarea
            theme={ThemeDefault}
            id="textareaTest1"
            placeholder="Your text&hellip;"
            label="Your message"
            hasCounter={true}
        />
    );
    expect(textarea.toJSON()).toMatchSnapshot();
});