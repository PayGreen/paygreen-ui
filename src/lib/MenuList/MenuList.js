import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import { MenuListBase } from './style';

class MenuList extends PureComponent {
    render() {
        return <MenuListBase
            {...this.props}
        >
            {React.Children.map(this.props.children, (child, index) =>
                <li key={index}>
                    {child}
                </li>
            )}
        </MenuListBase>;
    }
}

MenuList.propTypes = {
    isOpen: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

MenuList.defaultProps = {
    isOpen: true,
    colorTheme: colorThemeDefault,
};

export default MenuList;