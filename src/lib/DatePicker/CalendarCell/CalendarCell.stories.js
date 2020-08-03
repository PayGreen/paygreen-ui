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

storiesOf(folder.form + folder.sub.datePicker + 'CalendarCell', module)
    .addDecorator(withKnobs)
    .add('CalendarCell', () => (
        <CalendarCell
            date={moment()}
            colorTheme={select(
                'Color theme',
                formStatusOptions,
                formStatusDefault,
            )}
            isSelected={boolean('Is selected', false)}
            isDisabled={boolean('Is disabled', false)}
        />
    ));
