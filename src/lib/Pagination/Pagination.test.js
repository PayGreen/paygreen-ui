import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Pagination from './Pagination';

it('renders without crashing', () => {
    const pagination = TestRenderer.create(
        <Pagination theme={ThemeDefault} pageIndex={2} pageCount={21} />,
    );
    expect(pagination.toJSON()).toMatchSnapshot();
});
