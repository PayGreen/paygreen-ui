import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../../theme';
import DatePickerInput from './DatePickerInput';

it('renders without crashing', () => {
    const datePickerInput = TestRenderer.create(
        <DatePickerInput theme={ThemeDefault} />,
    );
    expect(datePickerInput.toJSON()).toMatchSnapshot();
});
