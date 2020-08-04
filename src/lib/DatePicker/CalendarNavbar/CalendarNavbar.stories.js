import React, { useState } from 'react';
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

storiesOf(folder.form + folder.sub.datePicker + 'CalendarNavbar', module)
    .addDecorator(withKnobs)
    .add('CalendarNavbar', () => {
        const [month, setMonth] = useState(moment().month());

        return (
            <MonthContextProvider value={[month, setMonth]}>
                <CalendarNavbar
                    colorStatus={select(
                        'Color status',
                        formStatusOptions,
                        formStatusDefault,
                    )}
                />
            </MonthContextProvider>
        );
    });
