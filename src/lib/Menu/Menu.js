import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { itemHtmlTagOptions, itemHtmlTagDefault } from '../../shared/constants';
import { MenuBase } from './style';

class Menu extends PureComponent {
    render() {
        return <MenuBase
            as={this.props.htmlTag}
            {...this.props}
        >
            {this.props.children}
        </MenuBase>;
    }
}

Menu.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(itemHtmlTagOptions)),
};

Menu.defaultProps = {
    htmlTag: itemHtmlTagDefault,
};

export default Menu;