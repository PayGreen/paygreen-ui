import React from 'react';
import PropTypes from 'prop-types';
import {
    gradientOptions,
    gradientDefault,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import { OverlayBase } from './style';

const Overlay = props => {
    return <OverlayBase {...props} />;
};

Overlay.propTypes = {
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    zindex: PropTypes.number,
    opacityValue: PropTypes.number,
};

Overlay.defaultProps = {
    gradient: gradientDefault,
    colorTheme: colorThemeDefault,
    zindex: 0,
    opacityValue: 60,
};

export default Overlay;
