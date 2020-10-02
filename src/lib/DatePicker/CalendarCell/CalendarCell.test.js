import React, { useState } from 'react';
import moment from 'moment';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import { DateContextProvider } from '../context/DateContext';
import CalendarCell from './CalendarCell';

const CalendarCell_withContext = () => {
    const [selectedDate, setSelectedDate] = useState(moment());
    return (
        <DateContextProvider value={[selectedDate, setSelectedDate]}>
            <CalendarCell theme={ThemeDefault} date={moment()} />
        </DateContextProvider>
    );
};

it('renders without crashing', () => {
    const calendarCell = TestRenderer.create(<CalendarCell_withContext />);
    expect(calendarCell.toJSON()).toMatchSnapshot();
});
