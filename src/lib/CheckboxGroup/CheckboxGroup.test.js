import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import CheckboxGroup from './CheckboxGroup';

const checkboxOptions = [
    {
        id: 'first',
        label: 'First Choice',
        value: 'first',
    },
    {
        id: 'second',
        label: 'Second Choice',
        value: 'second',
    },
];

it('renders without crashing', () => {
    const checkboxGroup = TestRenderer.create(
        <CheckboxGroup
            theme={ThemeDefault}
            checkboxOptions={checkboxOptions}
            checkboxName="test1"
            legend="Checkbox Label"
        />,
    );
    expect(checkboxGroup.toJSON()).toMatchSnapshot();
});
