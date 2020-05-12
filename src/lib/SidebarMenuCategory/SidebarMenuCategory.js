import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    fontSizeOptions,
    greyOptions,
} from '../../shared/constants';
import { SidebarMenuCategoryBase } from './style';
import Title from '../Title/Title';

const SidebarMenuCategory = props => {
    return (
        <SidebarMenuCategoryBase {...props}>
            {props.categoryTitle ? (
                <Title
                    {...props}
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey30}
                    textSize={fontSizeOptions.xs}
                >
                    {props.categoryTitle}
                </Title>
            ) : null}
            {props.children}
        </SidebarMenuCategoryBase>
    );
};

SidebarMenuCategory.propTypes = {
    categoryTitle: PropTypes.string,
};

SidebarMenuCategory.defaultProps = {
    categoryTitle: null,
};

export default SidebarMenuCategory;
