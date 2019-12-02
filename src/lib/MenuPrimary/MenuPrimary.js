import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MenuPrimaryBase } from './style';

class MenuPrimary extends PureComponent {
    render() {
        return <MenuPrimaryBase
            {...this.props}
        >
            {this.props.children}
        </MenuPrimaryBase>;
    }
}

MenuPrimary.propTypes = {
    isOpen: PropTypes.bool
};

MenuPrimary.defaultProps = {
    isOpen: PropTypes.false
};

export default MenuPrimary;