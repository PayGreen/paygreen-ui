import React from 'react';
import PropTypes from 'prop-types';
import { itemHtmlTagOptions, itemHtmlTagDefault } from '../../shared/constants';
import { MenuBase } from './style';

const Menu = props => {
    return (
        <MenuBase as={props.htmlTag} {...props}>
            {props.children}
        </MenuBase>
    );
};

Menu.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(itemHtmlTagOptions)),
};

Menu.defaultProps = {
    htmlTag: itemHtmlTagDefault,
};

export default Menu;
