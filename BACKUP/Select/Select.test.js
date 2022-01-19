import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Select from './Select';

const sampleOptions = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        optgroup: 'First group',
        values: [
            {
                value: 'first',
                text: 'First option',
            },
            {
                value: 'second',
                text: 'Second option',
            },
            {
                value: 'third',
                text: 'Third option',
            },
        ],
    },
    {
        optgroup: 'Second group',
        values: [
            {
                value: 'first 2',
                text: 'First option',
            },
            {
                value: 'second 2',
                text: 'Second option',
                disabled: true,
            },
            {
                value: 'third 2',
                text: 'Third option',
            },
        ],
    },
];

it('renders without crashing', () => {
    const selectBlock = TestRenderer.create(
        <Select
            theme={ThemeDefault}
            id="selectId1"
            label="Your choice"
            options={sampleOptions}
        />,
    );
    expect(selectBlock.toJSON()).toMatchSnapshot();
});
