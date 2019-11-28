import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { MenuItemBase } from './style';

class MenuItem extends PureComponent {
    render() {
        return <MenuItemBase
            {...this.props}
        >
            {this.props.children}
        </MenuItemBase>;
    }
}

MenuItem.propTypes = {

};

MenuItem.defaultProps = {

};

export default MenuItem;