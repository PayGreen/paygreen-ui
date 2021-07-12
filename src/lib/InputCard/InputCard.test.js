import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { SatchelIcon } from '../Icon/Icon';
import InputCard from './InputCard';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <InputCard theme={ThemeDefault} name="test" id="test1" text="label">
            <SatchelIcon theme={ThemeDefault} />
        </InputCard>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
