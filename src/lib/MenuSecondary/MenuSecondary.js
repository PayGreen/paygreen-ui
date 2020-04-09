import React from 'react';
import PropTypes from 'prop-types';
import { MenuSecondaryBase } from './style';

const MenuSecondary = props => {
    return <MenuSecondaryBase {...props}>{props.children}</MenuSecondaryBase>;
};

MenuSecondary.propTypes = {
    isOpen: PropTypes.bool,
};

MenuSecondary.defaultProps = {
    isOpen: PropTypes.false,
};

export default MenuSecondary;
