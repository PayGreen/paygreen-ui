import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import CalendarWeekdays from './CalendarWeekdays';

it('renders without crashing', () => {
    const calendarWeekdays = TestRenderer.create(
        <CalendarWeekdays theme={ThemeDefault} />,
    );
    expect(calendarWeekdays.toJSON()).toMatchSnapshot();
});
