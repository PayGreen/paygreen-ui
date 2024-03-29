import React, { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import { DateContextProvider } from '../context/DateContext';
import { DropdownContext } from '../../Dropdown/context/DropdownContext';
import dayjs from '../dayjsHelper';
import Calendar from './Calendar';

const Calendar_withContext = () => {
    const [isOpen, setOpen] = useState(); // only needed for test
    const [selectedDate, setSelectedDate] = useState(
        dayjs('2021-04-23T15:00:00.000'),
    );

    return (
        <DropdownContext.Provider value={[setOpen, isOpen]}>
            <DateContextProvider value={[selectedDate, setSelectedDate]}>
                <Calendar
                    theme={ThemeDefault}
                    currentMonth={selectedDate.month()}
                />
            </DateContextProvider>
        </DropdownContext.Provider>
    );
};

it('renders without crashing', () => {
    const calendar = TestRenderer.create(<Calendar_withContext />);
    expect(calendar.toJSON()).toMatchSnapshot();
});
