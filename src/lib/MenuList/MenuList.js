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
                child ?
                    <li key={index}>
                        {child}
                    </li>
                    : null
            )}
        </MenuListBase>;
    }
}

MenuList.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

MenuList.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default MenuList;