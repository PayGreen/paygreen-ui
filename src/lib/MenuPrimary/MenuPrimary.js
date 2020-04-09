import React from 'react';
import PropTypes from 'prop-types';
import { MenuPrimaryBase } from './style';

const MenuPrimary = props => {
    return <MenuPrimaryBase {...props}>{props.children}</MenuPrimaryBase>;
};

MenuPrimary.propTypes = {
    isOpen: PropTypes.bool,
};

MenuPrimary.defaultProps = {
    isOpen: PropTypes.false,
};

export default MenuPrimary;
