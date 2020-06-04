import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import RadioGroup from './RadioGroup';

const radioOptions = [
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
    const radioGroup = TestRenderer.create(
        <RadioGroup
            theme={ThemeDefault}
            radioOptions={radioOptions}
            radioName="test1"
            legend="Radio Label"
        />,
    );
    expect(radioGroup.toJSON()).toMatchSnapshot();
});
