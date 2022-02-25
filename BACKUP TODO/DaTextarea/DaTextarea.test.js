import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaTextarea from './DaTextarea';

it('renders without crashing', () => {
    const textarea = TestRenderer.create(
        <DaTextarea
            theme={ThemeDefault}
            placeholder="Your text&hellip;"
            hasCounter={true}
        />,
    );
    expect(textarea.toJSON()).toMatchSnapshot();
});
