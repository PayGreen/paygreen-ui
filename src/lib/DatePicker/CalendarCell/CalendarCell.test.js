import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import CalendarCell from './CalendarCell';

it('renders without crashing', () => {
    const calendarCell = TestRenderer.create(
        <CalendarCell theme={ThemeDefault} />,
    );
    expect(calendarCell.toJSON()).toMatchSnapshot();
});
