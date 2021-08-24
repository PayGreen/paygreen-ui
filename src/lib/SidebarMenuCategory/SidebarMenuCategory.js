import React from 'react';
import PropTypes from 'prop-types';
import {
    fontSizeOptions,
    greyOptions,
    spaceOptions,
} from '../../shared/constants';
import { SidebarMenuCategoryBase } from './style';
import Title from '../Title/Title';

const SidebarMenuCategory = ({ children, categoryTitle, ...rest }) => {
    return (
        <SidebarMenuCategoryBase {...rest}>
            {categoryTitle ? (
                <Title
                    theme={rest.theme} // not necessary, only needed for tests
                    colorWab={greyOptions.grey30}
                    textSize={fontSizeOptions.xxs}
                    isResponsive={false}
                >
                    {categoryTitle}
                </Title>
            ) : null}

            {children}
        </SidebarMenuCategoryBase>
    );
};

SidebarMenuCategory.propTypes = {
    categoryTitle: PropTypes.string,
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
};

SidebarMenuCategory.defaultProps = {
    categoryTitle: null,
    paddingLateral: spaceOptions.xs,
};

export default SidebarMenuCategory;
