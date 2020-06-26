import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Pagination from './Pagination';

// these functions are needed for test since these props are required
const gotoPage = () => {};
const nextPage = () => {};
const previousPage = () => {};

it('renders without crashing', () => {
    const pagination = TestRenderer.create(
        <Pagination
            theme={ThemeDefault}
            pageIndex={2}
            pageCount={21}
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
        />,
    );
    expect(pagination.toJSON()).toMatchSnapshot();
});
