import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { HeaderBase } from './style';

const Header = (props) => {
    return <HeaderBase
        {...props}
    >
        {props.children}
    </HeaderBase>;
};

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
