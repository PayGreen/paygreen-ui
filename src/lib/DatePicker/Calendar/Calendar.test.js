import React, { useState } from 'react';
import moment from 'moment';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import { DateContextProvider } from '../context/DateContext';
import { DropdownContext } from '../../Dropdown/context/DropdownContext';
import Calendar from './Calendar';

const Calendar_withContext = () => {
    const [isOpen, setOpen] = useState(); // only needed for test
    const [selectedDate, setSelectedDate] = useState(moment());

    return (
        <DropdownContext.Provider value={[setOpen, isOpen]}>
            <DateContextProvider value={[selectedDate, setSelectedDate]}>
                <Calendar theme={ThemeDefault} />
            </DateContextProvider>
        </DropdownContext.Provider>
    );
};

it('renders without crashing', () => {
    const calendar = TestRenderer.create(<Calendar_withContext />);
    expect(calendar.toJSON()).toMatchSnapshot();
});
