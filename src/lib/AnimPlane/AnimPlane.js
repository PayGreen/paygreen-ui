import React from 'react';
import PropTypes from 'prop-types';
import { colorThemeOptions, colorThemeDefault } from '../../shared/constants';
import { AnimPlaneBase } from './style';
import { illu, dotsCount } from './style/illu';

const AnimPlane = props => {
    return (
        <AnimPlaneBase {...props} dotsCount={dotsCount}>
            {illu}
        </AnimPlaneBase>
    );
};

AnimPlane.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isActive: PropTypes.bool,
};

AnimPlane.defaultProps = {
    colorTheme: colorThemeDefault,
    isActive: false,
};

export default AnimPlane;
