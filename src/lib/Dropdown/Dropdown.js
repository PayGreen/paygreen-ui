import React from 'react';
import PropTypes from 'prop-types';
import { DropdownBase } from './style';

const Dropdown = props => {
    return <DropdownBase {...props}>{props.children}</DropdownBase>;
};

Dropdown.propTypes = {
};

Dropdown.defaultProps = {
};

export default Dropdown;
