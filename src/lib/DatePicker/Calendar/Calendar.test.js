import React, { useState } from 'react';
import moment from 'moment';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import { DateContextProvider } from '../context/DateContext';
import Calendar from './Calendar';

const Calendar_withContext = () => {
    const [selectedDate, setSelectedDate] = useState(moment());
    return (
        <DateContextProvider value={[selectedDate, setSelectedDate]}>
            <Calendar theme={ThemeDefault} />
        </DateContextProvider>
    );
};

it('renders without crashing', () => {
    const calendar = TestRenderer.create(<Calendar_withContext />);
    expect(calendar.toJSON()).toMatchSnapshot();
});
