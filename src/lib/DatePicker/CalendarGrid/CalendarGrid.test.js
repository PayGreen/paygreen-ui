import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import CalendarGrid from './CalendarGrid';

it('renders without crashing', () => {
    const calendarGrid = TestRenderer.create(
        <CalendarGrid theme={ThemeDefault} />,
    );
    expect(calendarGrid.toJSON()).toMatchSnapshot();
});
