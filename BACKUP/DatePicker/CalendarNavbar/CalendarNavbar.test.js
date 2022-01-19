import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import { MonthContextProvider } from '../context/MonthContext';
import dayjs from '../dayjsHelper';
import CalendarNavbar from './CalendarNavbar';

const CalendarNavbar_withContext = () => {
    const [month, setMonth] = useState(
        dayjs('2021-04-23T15:00:00.000').month(),
    );

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
