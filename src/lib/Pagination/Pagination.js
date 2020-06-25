import React from 'react';
import PropTypes from 'prop-types';
import { PaginationBase } from './style';
import PaginationItem from '../PaginationItem/PaginationItem';

const Pagination = props => {
    const paginationGroup = (pageIndex, pageCount) => {
        switch (pageIndex) {
            case 0:
                return (
                    <>
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 1} />
                        <PaginationItem {...props} pageIndex={pageIndex + 2} />
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 1} />
                        <PaginationItem {...props} pageIndex={pageCount} />
                    </>
                );
            case 1:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={pageIndex - 1} />
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 1} />
                        ...
                        <PaginationItem {...props} pageIndex={pageCount - 1} />
                        <PaginationItem {...props} pageIndex={pageCount} />
                    </>
                );
            case pageCount - 1:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={1} />
                        <PaginationItem {...props} pageIndex={2} />
                        ...
                        <PaginationItem {...props} pageIndex={pageIndex - 1} />
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageCount} />
                    </>
                );
            case pageCount:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={1} />
                        <PaginationItem {...props} pageIndex={2} />
                        ...
                        <PaginationItem {...props} pageIndex={pageIndex - 2} />
                        <PaginationItem {...props} pageIndex={pageIndex - 1} />
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex}
                            isActive={true}
                        />
                    </>
                );
            default:
                return (
                    <>
                        <PaginationItem {...props} pageIndex={1} />
                        ...
                        <PaginationItem {...props} pageIndex={pageIndex - 1} />
                        <PaginationItem
                            {...props}
                            pageIndex={pageIndex}
                            isActive={true}
                        />
                        <PaginationItem {...props} pageIndex={pageIndex + 1} />
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
    pageIndex: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
};

Pagination.defaultProps = {};

export default Pagination;
