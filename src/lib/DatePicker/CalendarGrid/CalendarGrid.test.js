import React, { useState } from 'react';
import moment from 'moment';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import { DropdownContext } from '../../Dropdown/context/DropdownContext';
import { DateContextProvider } from '../context/DateContext';
import { MonthContextProvider } from '../context/MonthContext';
import CalendarGrid from './CalendarGrid';

const CalendarGrid_withContext = () => {
    const [isOpen, setOpen] = useState(); // only needed for test
    const [selectedDate, setSelectedDate] = useState(
        moment('2021-04-23T15:00:00.000'),
    );
    const [month, setMonth] = useState(selectedDate.month());

    return (
        <DropdownContext.Provider value={[setOpen, isOpen]}>
            <DateContextProvider value={[selectedDate, setSelectedDate]}>
                <MonthContextProvider value={[month, setMonth]}>
                    <CalendarGrid theme={ThemeDefault} />
                </MonthContextProvider>
            </DateContextProvider>
        </DropdownContext.Provider>
    );
};

it('renders without crashing', () => {
    const calendarGrid = TestRenderer.create(<CalendarGrid_withContext />);
    expect(calendarGrid.toJSON()).toMatchSnapshot();
});
