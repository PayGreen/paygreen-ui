import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import RadioIcon from './RadioIcon';

it('renders without crashing', () => {
    const radio = TestRenderer.create(
        <RadioIcon theme={ThemeDefault}>
            Something
        </RadioIcon>
    );
    expect(radio.toJSON()).toMatchSnapshot();
});