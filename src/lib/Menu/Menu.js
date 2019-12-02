import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MenuBase } from './style';

class Menu extends PureComponent {
    render() {
        return <MenuBase
            as={this.props.blockHtmlTag}
            {...this.props}
        >
            {this.props.children}
        </MenuBase>;
    }
}

Menu.propTypes = {
    blockHtmlTag: PropTypes.oneOf(['li', 'div']),
};

Menu.defaultProps = {
    blockHtmlTag: 'li',
};

export default Menu;