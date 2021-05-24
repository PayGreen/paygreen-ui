import React from 'react';
import moment from 'moment';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DatePicker from './DatePicker';

it('renders without crashing', () => {
    const datePicker = TestRenderer.create(
        <DatePicker
            theme={ThemeDefault}
            value={moment('2021-04-23T15:00:00.000')}
            onChange={() => {}}
        />,
    );
    expect(datePicker.toJSON()).toMatchSnapshot();
});
