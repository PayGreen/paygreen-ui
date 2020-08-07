import React, { useState } from 'react';
import moment from 'moment';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import CalendarNavbar from './CalendarNavbar';
import { MonthContextProvider } from '../context/MonthContext';

const CalendarNavbar_withContext = () => {
    const [month, setMonth] = useState(moment().month());
    return (
        <MonthContextProvider value={[month, setMonth]}>
            <CalendarNavbar theme={ThemeDefault} />
        </MonthContextProvider>
    );
};

it('renders without crashing', () => {
    const calendarNavbar = TestRenderer.create(<CalendarNavbar_withContext />);
    expect(calendarNavbar.toJSON()).toMatchSnapshot();
});
