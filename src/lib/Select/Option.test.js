import React from 'react';
import TestRenderer from 'react-test-renderer';
import Option from './Option';

const sampleOption = {
    value: 'first',
    text: 'First option',
};

it('renders without crashing', () => {
    const optionBlock = TestRenderer.create(
        <Option option={sampleOption} />,
    );
    expect(optionBlock.toJSON()).toMatchSnapshot();
});
