import React from 'react';
import PropTypes from 'prop-types';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import { MenuGroupBase } from './style';

const MenuGroup = props => {
    let hasOpenMenu = false;

    React.Children.map(props.children, child => {
        if (!child) {
            return null;
        }
        if ([MenuPrimary, MenuSecondary].includes(child.type)) {
            if (child.props.isOpen) {
                hasOpenMenu = true;
            }
        }
    });

    return (
        <MenuGroupBase hasOpenMenu={hasOpenMenu} {...props}>
            {props.children}
        </MenuGroupBase>
    );
};

MenuGroup.propTypes = {
    isHidden: PropTypes.bool,
    hasTopStyle: PropTypes.bool,
};

MenuGroup.defaultProps = {
    isHidden: false,
    hasTopStyle: false,
};

export default MenuGroup;
