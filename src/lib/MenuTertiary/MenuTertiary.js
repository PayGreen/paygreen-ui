import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { MenuTertiaryBase } from './style';

const MenuTertiary = (props) => {
    return <MenuTertiaryBase
        {...props}
    >
        {props.children}
    </MenuTertiaryBase>;
};

MenuTertiary.propTypes = {

};

MenuTertiary.defaultProps = {

};

export default MenuTertiary;
