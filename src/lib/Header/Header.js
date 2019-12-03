import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    
} from '../../shared/constants';
import { HeaderBase } from './style';

class Header extends PureComponent {
    render() {
        return <HeaderBase
            {...this.props}
        >
            {this.props.children}
        </HeaderBase>;
    }
}

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;