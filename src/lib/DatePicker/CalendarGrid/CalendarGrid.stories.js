import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { folder } from '../../../shared/constants';
import CalendarGrid from './CalendarGrid';

storiesOf(folder.form + folder.sub.datePicker + 'CalendarGrid', module)
    .addDecorator(withKnobs)
    .add('CalendarGrid', () => <CalendarGrid />);
