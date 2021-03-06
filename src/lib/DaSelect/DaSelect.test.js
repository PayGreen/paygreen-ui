import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import DaSelect from './DaSelect';

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
];

it('renders without crashing', () => {
    const daSelectBlock = TestRenderer.create(
        <DaSelect theme={ThemeDefault} options={sampleOptions} />,
    );
    expect(daSelectBlock.toJSON()).toMatchSnapshot();
});
