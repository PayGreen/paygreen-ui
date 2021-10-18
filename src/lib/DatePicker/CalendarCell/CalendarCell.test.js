import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import { DropdownContext } from '../../Dropdown/context/DropdownContext';
import { DateContextProvider } from '../context/DateContext';
import dayjs from '../dayjsHelper';
import CalendarCell from './CalendarCell';

const CalendarCell_withContext = () => {
    const date = dayjs('2021-04-23T15:00:00.000');
    const [isOpen, setOpen] = useState(); // only needed for test
    const [selectedDate, setSelectedDate] = useState(date);

    return (
        <DropdownContext.Provider value={[setOpen, isOpen]}>
            <DateContextProvider value={[selectedDate, setSelectedDate]}>
                <CalendarCell theme={ThemeDefault} date={date} />
            </DateContextProvider>
        </DropdownContext.Provider>
    );
};

it('renders without crashing', () => {
    const calendarCell = TestRenderer.create(<CalendarCell_withContext />);
    expect(calendarCell.toJSON()).toMatchSnapshot();
});
