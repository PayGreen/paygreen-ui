import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Skeleton from './Skeleton';

it('renders without crashing', () => {
    const skeleton = TestRenderer.create(
        <Skeleton theme={ThemeDefault} />,
    );
    expect(skeleton.toJSON()).toMatchSnapshot();
});
