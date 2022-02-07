import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import AnimPlane from './AnimPlane';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <AnimPlane theme={ThemeDefault} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
