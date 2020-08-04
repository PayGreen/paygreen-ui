import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import CalendarNavbar from './CalendarNavbar';
import { MonthContextProvider } from '../context/MonthContext';

// Variables to initialize Context in demo
let month = moment().month();
let setMonth = e => {
    month = e;
};

storiesOf(folder.form + folder.sub.datePicker + 'CalendarNavbar', module)
    .addDecorator(withKnobs)
    .add('CalendarNavbar', () => (
        <MonthContextProvider value={[month, setMonth]}>
            <CalendarNavbar
                colorStatus={select(
                    'Color status',
                    formStatusOptions,
                    formStatusDefault,
                )}
            />
        </MonthContextProvider>
    ));
