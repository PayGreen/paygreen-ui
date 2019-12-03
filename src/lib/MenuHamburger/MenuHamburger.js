import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import { MenuHamburgerBase } from './style';

class MenuHamburger extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return <MenuHamburgerBase
            {...this.props}
            isOpen={this.state.isOpen}
            onClick={this.handleClick}
        >
            <span></span>
            <span></span>
            <span></span>
        </MenuHamburgerBase>;
    }
}

MenuHamburger.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

MenuHamburger.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default MenuHamburger;