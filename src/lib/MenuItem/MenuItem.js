import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    alignOptions,
    alignDefault,
} from '../../shared/constants';
import { MenuItemBase } from './style';

const MenuItem = props => {
    return <MenuItemBase {...props}>{props.children}</MenuItemBase>;
};

MenuItem.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isMain: PropTypes.bool,
    hasHoverBase: PropTypes.bool,
    hasHoverAlternative: PropTypes.bool,
    hasHoverEmphasis: PropTypes.bool,
    align: PropTypes.oneOf(Object.values(alignOptions)),
};

MenuItem.defaultProps = {
    colorTheme: colorThemeDefault,
    isMain: false,
    hasHoverBase: true,
    hasHoverAlternative: true,
    hasHoverEmphasis: false,
    align: alignDefault,
};

export default MenuItem;
