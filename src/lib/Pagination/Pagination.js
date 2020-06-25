import React from 'react';
import PropTypes from 'prop-types';
import { PaginationBase } from './style';
import PaginationItem from '../PaginationItem/PaginationItem';

const Pagination = props => {
    const paginationGroup = (pageIndex, pageCount, canPreviousPage, canNextPage) => {
        switch (true) {
            case pageIndex === 0:
                return (
                    <>
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 2} onClick={() => nextPage()}/>
                        <PaginationItem {...props} pageIndex={pageIndex + 3} onClick={() => gotoPage(pageIndex + 2)}/>
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 1} onClick={() => gotoPage(pageCount - 2)}/>
                        <PaginationItem {...props} pageIndex={pageCount} onClick={() => gotoPage(pageCount - 1)} />
                    </>
                );
            case pageIndex === 1:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={pageIndex} onClick={() => previousPage()}/>
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 2} onClick={() => nextPage()}/>
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 1} onClick={() => gotoPage(pageCount - 2)}/>
                        <PaginationItem {...props} pageIndex={pageCount} onClick={() => gotoPage(pageCount - 1)}/>
                    </>
                );
            case pageIndex === pageCount - 1:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={1} onClick={() => gotoPage(0)} />
                        <PaginationItem {...props} pageIndex={2}  onClick={() => gotoPage(1)}/>
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 2} onClick={() => previousPage()} />
                        <PaginationItem
                            {...props}
                            pageIndex={pageCount - 1}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageCount} onClick={() => nextPage()} />
                    </>
                );
            case pageIndex >= pageCount:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={1} onClick={() => gotoPage(0)} />
                        <PaginationItem {...props} pageIndex={2} onClick={() => gotoPage(1)}/>
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 2} onClick={() => gotoPage(pageCount - 3)}/>
                        <PaginationItem {...props} pageIndex={pageCount - 1} onClick={() => previousPage()}/>
                        <PaginationItem
                            {...props}
                            pageIndex={pageCount}
                            isActive={true}
                        />
                    </>
                );
            default:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={1} onClick={() => gotoPage(0)}/>
                        ...
                        <PaginationItem {...props} pageIndex={pageIndex} onClick={() => previousPage()}/>
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 2} onClick={() => nextPage()} />
                        ...
                        <PaginationItem {...props} pageIndex={pageCount} onClick={() => gotoPage(pageCount - 1)}  />
                    </>
                );
        }
    };

    return (
        <PaginationBase {...props}>
            {paginationGroup(props.pageIndex, props.pageCount, props.canPreviousPage, props.canNextPage)}
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
