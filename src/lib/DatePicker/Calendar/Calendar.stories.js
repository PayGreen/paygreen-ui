import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import Calendar from './Calendar';
import { DateContextProvider } from '../context/DateContext';

// Variables to initialize Context in demo
let date = moment().startOf('D');
let setDate = e => {
    date = e;
};

storiesOf(folder.form + folder.sub.datePicker + 'Calendar', module)
    .addDecorator(withKnobs)
    .add('Calendar', () => (
        <DateContextProvider value={[date, setDate]}>
            <Calendar
                colorStatus={select(
                    'Color status',
                    formStatusOptions,
                    formStatusDefault,
                )}
            />
        </DateContextProvider>
    ));
