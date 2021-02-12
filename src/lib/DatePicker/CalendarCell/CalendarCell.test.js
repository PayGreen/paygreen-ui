import React, { useState } from 'react';
import moment from 'moment';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import { DropdownContext } from '../../Dropdown/context/DropdownContext';
import { DateContextProvider } from '../context/DateContext';
import CalendarCell from './CalendarCell';

const CalendarCell_withContext = () => {
    const [isOpen, setOpen] = useState(); // only needed for test
    const [selectedDate, setSelectedDate] = useState(moment());

    return (
        <DropdownContext.Provider value={[setOpen, isOpen]}>
            <DateContextProvider value={[selectedDate, setSelectedDate]}>
                <CalendarCell theme={ThemeDefault} date={moment()} />
            </DateContextProvider>
        </DropdownContext.Provider>
    );
};

it('renders without crashing', () => {
    const calendarCell = TestRenderer.create(<CalendarCell_withContext />);
    expect(calendarCell.toJSON()).toMatchSnapshot();
});
