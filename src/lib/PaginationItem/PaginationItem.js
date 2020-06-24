import React from 'react';
import PropTypes from 'prop-types';
import { PaginationItemBase } from './style';

const PaginationItem = props => {
    return (
        <PaginationItemBase {...props} type="button">
            {props.pageIndex}
        </PaginationItemBase>
    );
};

PaginationItem.propTypes = {
    pageIndex: PropTypes.number,
    isActive: PropTypes.bool,
};

PaginationItem.defaultProps = {
    pageIndex: 0,
    isActive: false,
};

export default PaginationItem;
