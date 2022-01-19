import React from 'react';
import TestRenderer from 'react-test-renderer';
import Options from './Options';

const sampleOptions = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
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
];

it('renders without crashing', () => {
    const optionsBlock = TestRenderer.create(
        <Options options={sampleOptions} />,
    );
    expect(optionsBlock.toJSON()).toMatchSnapshot();
});
