import React from 'react';
import PropTypes from 'prop-types';
import {
    itemHtmlTagOptions,
    itemHtmlTagDefault,
    iconSizeOptions,
} from '../../shared/constants';
import { ArrowTopIcon, ArrowBottomIcon } from '../Icon/Icon';
import { SidebarMenuBase } from './style';

const SidebarMenu = props => {
    return (
        <SidebarMenuBase as={props.htmlTag} {...props}>
            {props.children.length > 1 ? (
                props.isOpen ? (
                    <button>
                        <ArrowTopIcon
                            theme={props.theme}
                            colorTheme={props.colorTheme}
                            iconSize={iconSizeOptions.sm}
                            hasBackground={true}
                        />
                    </button>
                ) : (
                    <button>
                        <ArrowBottomIcon
                            theme={props.theme}
                            colorTheme={props.colorTheme}
                            iconSize={iconSizeOptions.sm}
                            hasBackground={true}
                        />
                    </button>
                )
            ) : null}
            {props.children}
        </SidebarMenuBase>
    );
};

SidebarMenu.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(itemHtmlTagOptions)),
    isOpen: PropTypes.bool,
};

SidebarMenu.defaultProps = {
    htmlTag: itemHtmlTagDefault,
    isOpen: false,
};

export default SidebarMenu;
