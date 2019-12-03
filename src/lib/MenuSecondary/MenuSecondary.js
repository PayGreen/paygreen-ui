import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MenuSecondaryBase } from './style';

class MenuSecondary extends PureComponent {
    render() {
        return <MenuSecondaryBase
            {...this.props}
        >
            {this.props.children}
        </MenuSecondaryBase>;
    }
}

MenuSecondary.propTypes = {
    isOpen: PropTypes.bool
};

MenuSecondary.defaultProps = {
    isOpen: PropTypes.false
};

export default MenuSecondary;