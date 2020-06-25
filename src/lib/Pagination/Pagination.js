import React from 'react';
import PropTypes from 'prop-types';
import { PaginationBase } from './style';
import PaginationItem from '../PaginationItem/PaginationItem';

const Pagination = props => {
    const paginationGroup = (pageIndex, pageCount) => {
        if (pageCount > 5) {
        }
        switch (true) {
            case pageIndex === 0:
                return (
                    <>
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 2} />
                        <PaginationItem {...props} pageIndex={pageIndex + 3} />
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 1} />
                        <PaginationItem {...props} pageIndex={pageCount} />
                    </>
                );
            case pageIndex === 1:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={pageIndex} />
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 2} />
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 1} />
                        <PaginationItem {...props} pageIndex={pageCount} />
                    </>
                );
            case pageIndex === pageCount - 2:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={1} />
                        <PaginationItem {...props} pageIndex={2} />
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 2} />
                        <PaginationItem
                            {...props}
                            pageIndex={pageCount - 1}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageCount} />
                    </>
                );
            case pageIndex >= pageCount:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={1} />
                        <PaginationItem {...props} pageIndex={2} />
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 2} />
                        <PaginationItem {...props} pageIndex={pageCount - 1} />
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
                        <PaginationItem {...props} pageIndex={1} />
                        ...
                        <PaginationItem {...props} pageIndex={pageIndex} />
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex + 1}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 2} />
                        ...
                        <PaginationItem {...props} pageIndex={pageCount} />
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
};

Pagination.defaultProps = {
    pageIndex: 0,
};

export default Pagination;
