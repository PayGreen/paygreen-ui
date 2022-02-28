import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Loader from './Loader';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <Loader theme={ThemeDefault} />
    );
    expect(component.toJSON()).toMatchSnapshot();
});