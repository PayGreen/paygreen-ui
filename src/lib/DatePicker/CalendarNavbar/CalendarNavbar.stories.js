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

storiesOf(folder.form + folder.sub.datePicker + 'CalendarNavbar', module)
    .addDecorator(withKnobs)
    .add('CalendarNavbar', () => (
        <CalendarNavbar
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
            month={number('Month index', moment().month(), {
                range: true,
                min: 0,
                max: 11,
                step: 1,
            })}
            onMonthChange={e => {
                console.log(
                    moment()
                        .month(e)
                        .startOf('M'),
                );
            }}
        />
    ));
