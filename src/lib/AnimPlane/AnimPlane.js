import React from 'react';
import PropTypes from 'prop-types';
import { colorThemeOptions, colorThemeDefault } from '../../shared/constants';
import { AnimPlaneBase } from './style';
import { illu } from './style/illu';

const AnimPlane = props => {
    return <AnimPlaneBase {...props}>{illu}</AnimPlaneBase>;
};

AnimPlane.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

AnimPlane.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default AnimPlane;
