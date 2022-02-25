import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DatePicker from './DatePicker';

it('renders without crashing', () => {
    const datePicker = TestRenderer.create(
        <DatePicker
            theme={ThemeDefault}
            value="23/04/2021"
            onChange={() => {}}
        />,
    );
    expect(datePicker.toJSON()).toMatchSnapshot();
});
