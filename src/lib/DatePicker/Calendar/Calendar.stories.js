import React, { useState } from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, date } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import Calendar from './Calendar';
import { DateContextProvider } from '../context/DateContext';

storiesOf(folder.form + folder.sub.datePicker + 'Calendar', module)
    .addDecorator(withKnobs)
    .add('Calendar', () => {
        const [selectedDate, setSelectedDate] = useState(moment().startOf('D'));

        return (
            <DateContextProvider value={[selectedDate, setSelectedDate]}>
                <Calendar
                    colorStatus={select(
                        'Color status',
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    minimumDate={moment(
                        moment()
                            .add(-1, 'M')
                            .toDate(),
                    )}
                    maximumDate={moment(
                        moment()
                            .add(1, 'M')
                            .toDate(),
                    )}
                />
            </DateContextProvider>
        );
    });
