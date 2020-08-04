import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import CalendarCell from './CalendarCell';
import { DateContextProvider } from '../context/DateContext';

// Variables to initialize Context in demo
let date = moment().startOf('D');
let setDate = e => {
    date = e;
};

storiesOf(folder.form + folder.sub.datePicker + 'CalendarCell', module)
    .addDecorator(withKnobs)
    .add('CalendarCell', () => (
        <DateContextProvider value={[date, setDate]}>
            <CalendarCell
                date={date}
                colorStatus={select(
                    'Color status',
                    formStatusOptions,
                    formStatusDefault,
                )}
                isSelected={boolean('Is selected', false)}
                isDisabled={boolean('Is disabled', false)}
            />
        </DateContextProvider>
    ));
