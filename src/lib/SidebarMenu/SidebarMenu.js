import React from 'react';
import PropTypes from 'prop-types';
import { itemHtmlTagOptions, itemHtmlTagDefault } from '../../shared/constants';
import { SidebarMenuBase } from './style';

const SidebarMenu = props => {
    return (
        <SidebarMenuBase as={props.htmlTag} {...props}>
        {props.children}
        </SidebarMenuBase>
    );
};

SidebarMenu.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(itemHtmlTagOptions)),
};

SidebarMenu.defaultProps = {
    htmlTag: itemHtmlTagDefault,
};

export default SidebarMenu;
