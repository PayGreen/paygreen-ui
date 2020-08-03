import React, { useState } from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
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
                        text(
                            'Minimum date',
                            moment()
                                .add(-1, 'M')
                                .format('DD/MM/YYYY'),
                        ),
                        'DD/MM/YYYY',
                    )}
                    maximumDate={moment(
                        text(
                            'Maximum date',
                            moment()
                                .add(1, 'M')
                                .format('DD/MM/YYYY'),
                        ),
                        'DD/MM/YYYY',
                    )}
                />
            </DateContextProvider>
        );
    });
