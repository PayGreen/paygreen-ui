import React from 'react';
import PropTypes from 'prop-types';
import { MainBase } from './style';

const Main = props => {
    return <MainBase {...props}>{props.children}</MainBase>;
};

Main.propTypes = {
    isOpen: PropTypes.bool,
};

Main.defaultProps = {
    isOpen: false,
};

export default Main;
