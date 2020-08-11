import React, { useState } from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
    folder,
    formStatusDefault,
    formStatusOptions,
} from '../../../shared/constants';
import CalendarGrid from './CalendarGrid';
import { MonthContextProvider } from '../context/MonthContext';
import { DateContextProvider } from '../context/DateContext';

storiesOf(folder.form + folder.sub.datePicker + 'CalendarGrid', module)
    .addDecorator(withKnobs)
    .add('CalendarGrid', () => {
        const [selectedDate, setSelectedDate] = useState(moment().startOf('D'));
        const [month, setMonth] = useState(moment().month());

        return (
            <DateContextProvider value={[selectedDate, setSelectedDate]}>
                <MonthContextProvider value={[month, setMonth]}>
                    <CalendarGrid
                        colorStatus={select(
                            'Color status',
                            formStatusOptions,
                            formStatusDefault,
                        )}
                    />
                </MonthContextProvider>
            </DateContextProvider>
        );
    });
