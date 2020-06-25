import React from 'react';
import PropTypes from 'prop-types';
import { PaginationBase } from './style';
import PaginationItem from '../PaginationItem/PaginationItem';

const Pagination = props => {
    const paginationGroup = (pageIndex, pageCount) => {
        switch (true) {
            case pageIndex === 0:
                return (
                    <>
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex + 2}
                            onClick={() => nextPage()}
                            hidden={pageIndex + 1 >= pageCount}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex + 3}
                            onClick={() => gotoPage(pageIndex + 2)}
                            hidden={pageIndex + 2 >= pageCount}
                        />
                        ...
                        <PaginationItem
                            {...props}
                            pageValue={pageCount - 1}
                            onClick={() => gotoPage(pageCount - 2)}
                            hidden={pageIndex === pageCount-2}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageCount}
                            onClick={() => gotoPage(pageCount - 1)}
                            hidden={pageIndex === pageCount-1}
                        />
                      
                        />
                    </>
                );
            case pageIndex === 1:
                return (
                    <>
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex}
                            onClick={() => previousPage()}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex + 2}
                            onClick={() => nextPage()}
                        />
                        ...
                        <PaginationItem
                            {...props}
                            pageValue={pageCount - 1}
                            onClick={() => gotoPage(pageCount - 2)}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageCount}
                            onClick={() => gotoPage(pageCount - 1)}
                        />
                    </>
                );
            case pageIndex === pageCount - 1:
                return (
                    <>
                        <PaginationItem
                            {...props}
                            pageValue={1}
                            onClick={() => gotoPage(0)}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={2}
                            onClick={() => gotoPage(1)}
                        />
                        ...
                        <PaginationItem
                            {...props}
                            pageValue={pageCount - 2}
                            onClick={() => previousPage()}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageCount - 1}
                            isActive={true}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageCount}
                            onClick={() => nextPage()}
                        />
                    </>
                );
            case pageIndex >= pageCount:
                return (
                    <>
                        <PaginationItem
                            {...props}
                            pageValue={1}
                            onClick={() => gotoPage(0)}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={2}
                            onClick={() => gotoPage(1)}
                        />
                        ...
                        <PaginationItem
                            {...props}
                            pageValue={pageCount - 2}
                            onClick={() => gotoPage(pageCount - 3)}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageCount - 1}
                            onClick={() => previousPage()}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageCount}
                            isActive={true}
                        />
                    </>
                );
            default:
                return (
                    <>
                        <PaginationItem
                            {...props}
                            pageValue={1}
                            onClick={() => gotoPage(0)}
                        />
                        ...
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex}
                            onClick={() => previousPage()}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem
                            {...props}
                            pageValue={pageIndex + 2}
                            onClick={() => nextPage()}
                        />
                        ...
                        <PaginationItem
                            {...props}
                            pageValue={pageCount}
                            onClick={() => gotoPage(pageCount - 1)}
                        />
                    </>
                );
        }
    };

    return (
        <PaginationBase {...props}>
            {paginationGroup(props.pageIndex, props.pageCount)}
        </PaginationBase>
    );
};

Pagination.propTypes = {
    pageIndex: PropTypes.number,
    pageCount: PropTypes.number.isRequired,
    canPreviousPage: PropTypes.bool,
    canNextPage: PropTypes.bool,
};

Pagination.defaultProps = {
    pageIndex: 0,
    canPreviousPage: true,
    canNextPage: true,
};

export default Pagination;
