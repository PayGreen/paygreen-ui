import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import AnimPlaneBase from './AnimPlaneBase';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <AnimPlaneBase theme={ThemeDefault} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
