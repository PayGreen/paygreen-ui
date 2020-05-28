import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaInput from './DaInput';

it('renders without crashing', () => {
    const daInputText = TestRenderer.create(
        <DaInput
            theme={ThemeDefault}
            id="testId1"
            placeholder="Firstname Lastname"
        />
    );
    expect(daInputText.toJSON()).toMatchSnapshot();
});