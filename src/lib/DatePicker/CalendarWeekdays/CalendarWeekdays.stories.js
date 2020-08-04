import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
    folder,
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import CalendarWeekdays from './CalendarWeekdays';

storiesOf(folder.form + folder.sub.datePicker + 'CalendarWeekdays', module)
    .addDecorator(withKnobs)
    .add('CalendarWeekdays', () => (
        <CalendarWeekdays
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
        />
    ));
