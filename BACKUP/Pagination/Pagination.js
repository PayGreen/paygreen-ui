import React from 'react';
import PropTypes from 'prop-types';
import { colorThemeOptions, colorThemeDefault } from '../../shared/constants';
import PaginationItem from '../PaginationItem/PaginationItem';
import { PaginationBase } from './style';

const Pagination = props => {
    const { pageIndex, pageCount, gotoPage, ...rest } = props;

    /**
     * Return PaginationItems
     * 
     * @param {number} pageIndex 
     * @param {number} pageCount 
     * @param {function} gotoPage 
     */
    const paginationGroup = (pageIndex, pageCount, gotoPage) => {
        const hellip = -1;
        let pageValues = [];
        
        if (pageCount <= 5) { // Case with 5 pages or less (no hellip)
            // First | Second | Third | Fourth | Fifth

            for (let i = 0; i < pageCount; i++) {
                pageValues.push(i);
            }

        } else if (pageIndex < 2) { // Current page is number 1 or 2
            // First | Second | Third ... Last - 1 | Last

            for (let i = 0; i < 3; i++) {
                pageValues.push(i);
            }

            pageValues.push(hellip);

            for (let i = pageCount - 2; i < pageCount; i++) {
                pageValues.push(i);
            }

        } else if (pageIndex === 2) { // Current page is number 3
            // First | Previous/Second | Current/Third | Next/Fourth ... Last

            for (let i = 0; i < 4; i++) {
                pageValues.push(i);
            }

            pageValues.push(hellip);
            pageValues.push(pageCount - 1);

        } else if (pageIndex > pageCount - 3) { // Last page or last - 1
            // First | Second ... Last - 2 | Last - 1 | Last

            for (let i = 0; i < 2; i++) {
                pageValues.push(i);
            }

            pageValues.push(hellip);

            for (let i = pageCount - 3; i < pageCount; i++) {
                pageValues.push(i);
            }

        } else if (pageIndex === pageCount - 3) { // Last page - 2
            // First ... Previous | Current | Next/Last - 1 | Last

            pageValues.push(0);
            pageValues.push(hellip);

            for (let i = pageCount - 4; i < pageCount; i++) {
                pageValues.push(i);
            }

        } else {
            // First ... Previous | Current | Next ... Last

            pageValues.push(0);
            pageValues.push(hellip);

            for (let i = pageIndex - 1; i < pageIndex + 2; i++) {
                pageValues.push(i);
            }

            pageValues.push(hellip);
            pageValues.push(pageCount - 1);

        }

        // Create all PaginationItems and (hellips between if needed)
        return pageValues.map(value => {
            return value === hellip ? (
                '...'
            ) : (
                <PaginationItem
                    {...rest}
                    key={value}
                    pageValue={value + 1}
                    isActive={value === pageIndex}
                    onClick={() => gotoPage(value)}
                />
            );
        });
    };

    return (
        <PaginationBase {...rest}>
            {pageCount > 0 && pageIndex >= 0
                ? paginationGroup(pageIndex, pageCount, gotoPage)
                : null}
        </PaginationBase>
    );
};

Pagination.propTypes = {
    pageIndex: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    gotoPage: PropTypes.func.isRequired,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

Pagination.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default Pagination;
