import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import CheckboxGroup from './CheckboxGroup';

const checkboxOptions = [
    {
        label: 'First Choice',
        value: 'first',
    },
    {
        label: 'Second Choice',
        value: 'second',
    },
];

it('renders without crashing', () => {
    const checkboxGroup = TestRenderer.create(
        <CheckboxGroup
            theme={ThemeDefault}
            options={checkboxOptions}
            name="test"
            legend="Checkbox Label"
        />,
    );
    expect(checkboxGroup.toJSON()).toMatchSnapshot();
});
