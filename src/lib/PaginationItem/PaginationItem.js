import React from 'react';
import PropTypes from 'prop-types';
import { colorThemeOptions, colorThemeDefault } from '../../shared/constants';
import { PaginationItemBase } from './style';

const PaginationItem = props => {
    return (
        <PaginationItemBase {...props} type="button">
            {props.pageValue}
        </PaginationItemBase>
    );
};

PaginationItem.propTypes = {
    pageValue: PropTypes.number,
    isActive: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

PaginationItem.defaultProps = {
    pageValue: 0,
    isActive: false,
    colorTheme: colorThemeDefault,
};

export default PaginationItem;
