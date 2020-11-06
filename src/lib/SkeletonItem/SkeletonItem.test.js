import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import SkeletonItem from './SkeletonItem';

it('renders without crashing', () => {
    const skeletonItem = TestRenderer.create(
        <SkeletonItem theme={ThemeDefault} />,
    );
    expect(skeletonItem.toJSON()).toMatchSnapshot();
});
