import React, { useState } from 'react';
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

storiesOf(folder.form + folder.sub.datePicker + 'CalendarCell', module)
    .addDecorator(withKnobs)
    .add('CalendarCell', () => {
        const [selectedDate, setSelectedDate] = useState(
            moment()
                .add(1, 'D')
                .startOf(),
        );

        return (
            <DateContextProvider value={[selectedDate, setSelectedDate]}>
                <CalendarCell
                    date={selectedDate}
                    colorStatus={select(
                        'Color status',
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    isSelected={boolean('Is selected', false)}
                    isDisabled={boolean('Is disabled', false)}
                />
            </DateContextProvider>
        );
    });
