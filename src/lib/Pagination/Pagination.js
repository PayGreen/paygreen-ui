import React from 'react';
import PropTypes from 'prop-types';
import { colorThemeOptions, colorThemeDefault } from '../../shared/constants';
import { PaginationBase } from './style';
import PaginationItem from '../PaginationItem/PaginationItem';

const Pagination = props => {
    const {
        pageIndex,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        ...rest
    } = props;

    const paginationGroup = (
        pageIndex,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
    ) => {
        if (pageCount <= 4) {
            const pageValues = [];
            for (let i = 1; i <= pageCount; i++) {
                pageValues.push(i);
            }
            return pageValues.map((value, i) => {
                return (
                    <PaginationItem
                        {...rest}
                        key={i}
                        pageValue={value}
                        isActive={value === pageIndex + 1}
                        onClick={() => gotoPage(i)}
                    />
                );
            });
        } else
            switch (true) {
                case pageIndex === 0:
                    return (
                        <>
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex + 1}
                                isActive={true}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex + 2}
                                onClick={() => nextPage()}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex + 3}
                                onClick={() => gotoPage(pageIndex + 2)}
                            />
                            ...
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount - 1}
                                onClick={() => gotoPage(pageCount - 2)}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount}
                                onClick={() => gotoPage(pageCount - 1)}
                            />
                        </>
                    );
                case pageIndex === 1:
                    return (
                        <>
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex}
                                onClick={() => previousPage()}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex + 1}
                                isActive={true}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex + 2}
                                onClick={() => nextPage()}
                            />
                            ...
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount - 1}
                                onClick={() => gotoPage(pageCount - 2)}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount}
                                onClick={() => gotoPage(pageCount - 1)}
                            />
                        </>
                    );
                case pageIndex === pageCount - 2:
                    return (
                        <>
                            <PaginationItem
                                {...rest}
                                pageValue={1}
                                onClick={() => gotoPage(0)}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={2}
                                onClick={() => gotoPage(1)}
                            />
                            ...
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount - 2}
                                onClick={() => previousPage()}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount - 1}
                                isActive={true}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount}
                                onClick={() => nextPage()}
                            />
                        </>
                    );
                case pageIndex === pageCount - 1:
                    return (
                        <>
                            <PaginationItem
                                {...rest}
                                pageValue={1}
                                onClick={() => gotoPage(0)}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={2}
                                onClick={() => gotoPage(1)}
                            />
                            ...
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount - 2}
                                onClick={() => gotoPage(pageCount - 3)}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount - 1}
                                onClick={() => previousPage()}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount}
                                isActive={true}
                            />
                        </>
                    );
                default:
                    return (
                        <>
                            <PaginationItem
                                {...rest}
                                pageValue={1}
                                onClick={() => gotoPage(0)}
                            />
                            ...
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex}
                                onClick={() => previousPage()}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex + 1}
                                isActive={true}
                            />
                            <PaginationItem
                                {...rest}
                                pageValue={pageIndex + 2}
                                onClick={() => nextPage()}
                            />
                            ...
                            <PaginationItem
                                {...rest}
                                pageValue={pageCount}
                                onClick={() => gotoPage(pageCount - 1)}
                            />
                        </>
                    );
            }
    };

    return (
        <PaginationBase {...props}>
            {pageCount > 0
                ? paginationGroup(
                      pageIndex,
                      pageCount,
                      gotoPage,
                      nextPage,
                      previousPage,
                  )
                : null}
        </PaginationBase>
    );
};

Pagination.propTypes = {
    pageIndex: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    gotoPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

Pagination.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default Pagination;
