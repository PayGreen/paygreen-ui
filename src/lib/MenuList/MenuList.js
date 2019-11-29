import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { MenuListBase } from './style';

class MenuList extends PureComponent {
    render() {
        return <MenuListBase
            {...this.props}
        >
            {this.props.children}
        </MenuListBase>;
    }
}

MenuList.propTypes = {

};

MenuList.defaultProps = {

};

export default MenuList;