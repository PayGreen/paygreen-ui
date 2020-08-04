import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import CalendarNavbar from './CalendarNavbar';

it('renders without crashing', () => {
    const calendarNavbar = TestRenderer.create(
        <CalendarNavbar theme={ThemeDefault} />,
    );
    expect(calendarNavbar.toJSON()).toMatchSnapshot();
});
