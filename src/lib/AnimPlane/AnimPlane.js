import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
} from '../../shared/constants';
import { CheckIcon } from '../Icon/Icon';
import { AnimPlaneBase } from './style';
import { illu, dotsCount } from './style/illu';

const AnimPlane = props => {
    return (
        <AnimPlaneBase {...props} dotsCount={dotsCount}>
            <CheckIcon
                colorTheme={props.colorTheme}
                iconSize={iconSizeOptions.xl}
                hasBackground={true}
            />

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
