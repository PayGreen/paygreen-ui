import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Input from './Input';

it('renders without crashing', () => {
    const inputText = TestRenderer.create(
        <Input
            theme={ThemeDefault}
            id="testId1"
            placeholder="Firstname Lastname"
            label="Your name"
        />
    );
    expect(inputText.toJSON()).toMatchSnapshot();
});