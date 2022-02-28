import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import PaginationItem from './PaginationItem';

it('renders without crashing', () => {
    const paginationItem = TestRenderer.create(
        <PaginationItem theme={ThemeDefault} />,
    );
    expect(paginationItem.toJSON()).toMatchSnapshot();
});
