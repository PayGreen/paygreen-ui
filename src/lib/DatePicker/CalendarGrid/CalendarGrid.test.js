import React, { useState } from 'react';
import moment from 'moment';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import CalendarGrid from './CalendarGrid';
import { DateContextProvider } from '../context/DateContext';
import { MonthContextProvider } from '../context/MonthContext';

const CalendarGrid_withContext = () => {
    const [selectedDate, setSelectedDate] = useState(moment());
    const [month, setMonth] = useState(selectedDate.month());

    return (
        <DateContextProvider value={[selectedDate, setSelectedDate]}>
            <MonthContextProvider value={[month, setMonth]}>
                <CalendarGrid theme={ThemeDefault} />
            </MonthContextProvider>
        </DateContextProvider>
    );
};

it('renders without crashing', () => {
    const calendarGrid = TestRenderer.create(<CalendarGrid_withContext />);
    expect(calendarGrid.toJSON()).toMatchSnapshot();
});
