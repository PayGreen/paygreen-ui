import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions
} from '../../shared/constants';
import { ArrowTopIcon } from '../Icon/Icon';
import { MenuCloseBase } from './style';

class MenuClose extends PureComponent {
    render() {
        return <MenuCloseBase
            {...this.props}
        >
            <ArrowTopIcon
                theme={this.props.theme} // not necessary, only needed for tests
                iconSize={iconSizeOptions.lg}
                colorTheme={this.props.colorTheme}
            />
            
            <svg className="background" viewBox="0 0 170 28.8">
                <path d="M85,0.8c37.6,0,63,28,85,28H0C29,28.8,47.4,0.8,85,0.8z" />
            </svg>
        </MenuCloseBase>;
    }
}

MenuClose.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

MenuClose.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default MenuClose;