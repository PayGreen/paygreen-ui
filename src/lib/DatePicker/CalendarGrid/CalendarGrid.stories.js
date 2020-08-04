import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { folder } from '../../../shared/constants';
import CalendarGrid from './CalendarGrid';
import { MonthContextProvider } from '../context/MonthContext';
import { DateContextProvider } from '../context/DateContext';

// Variables to initialize Context in demo
let month = moment().month();
let setMonth = e => {
    month = e;
};

let date = moment().startOf('D');
let setDate = e => {
    date = e;
};

storiesOf(folder.form + folder.sub.datePicker + 'CalendarGrid', module)
    .addDecorator(withKnobs)
    .add('CalendarGrid', () => (
        <DateContextProvider value={[date, setDate]}>
            <MonthContextProvider value={[month, setMonth]}>
                <CalendarGrid />
            </MonthContextProvider>
        </DateContextProvider>
    ));
