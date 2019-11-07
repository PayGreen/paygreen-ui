import React from 'react'
import Input from './Input';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';

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