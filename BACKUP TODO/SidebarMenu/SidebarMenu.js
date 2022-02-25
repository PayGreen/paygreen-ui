import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { itemHtmlTagOptions, itemHtmlTagDefault } from '../../shared/constants';
import { SidebarMenuBase } from './style';
import SidebarList from '../SidebarList/SidebarList';
import SidebarItem from '../SidebarItem/SidebarItem';

const SidebarMenu = props => {
    const [isOpen, setOpen] = useState(props.isOpen);

    return (
        <SidebarMenuBase as={props.htmlTag} {...props}>
            {React.Children.map(props.children, child => {
                switch (child && child.type) {
                    case null:
                        return null;
                    case SidebarItem:
                        return React.cloneElement(child, {
                            isOpen: isOpen,
                            onClick: () => setOpen(!isOpen),
                        });
                    case SidebarList:
                        return React.cloneElement(child, {
                            isOpen: isOpen,
                        });
                    default:
                        return child;
                }
            })}
        </SidebarMenuBase>
    );
};

SidebarMenu.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(itemHtmlTagOptions)),
    isOpen: PropTypes.bool,
};

SidebarMenu.defaultProps = {
    htmlTag: itemHtmlTagDefault,
    isOpen: true,
};

export default SidebarMenu;
