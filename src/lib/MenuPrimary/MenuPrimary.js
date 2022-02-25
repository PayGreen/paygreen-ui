import React from 'react';
import PropTypes from 'prop-types';
import  { AutoBlockScroll } from '../GlobalStyle';
import { MenuPrimaryBase } from './style';

const MenuPrimary = props => {
    return (
        <MenuPrimaryBase {...props}>
            {props.isOpen ? (
                <AutoBlockScroll
                    theme={props.theme} // not necessary, only needed for tests
                    hasScrollOnDesktop={true}
                />
            ) : null}

            {props.children}
        </MenuPrimaryBase>
    );
};

MenuPrimary.propTypes = {
    isOpen: PropTypes.bool,
};

MenuPrimary.defaultProps = {
    isOpen: false,
};

export default MenuPrimary;
