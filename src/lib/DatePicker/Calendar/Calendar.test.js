import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import Calendar from './Calendar';

it('renders without crashing', () => {
    const calendar = TestRenderer.create(
        <Calendar theme={ThemeDefault} />,
    );
    expect(calendar.toJSON()).toMatchSnapshot();
});
