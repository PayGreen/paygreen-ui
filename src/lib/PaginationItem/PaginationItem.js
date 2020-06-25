import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    gradientOptions,
    gradientDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
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
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

PaginationItem.defaultProps = {
    pageIndex: 0,
    isActive: false,
    colorTheme: colorThemeDefault,
};

export default PaginationItem;
