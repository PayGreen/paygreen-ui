import React from 'react';
import PropTypes from 'prop-types';
import {
    dotStyleOptions,
    dotStyleDefault,
    iconSizeOptions,
    iconSizeDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { DotBase } from './style';

const Dot = props => {
    return <DotBase {...props} />;
};

Dot.propTypes = {
    dotStyle: PropTypes.oneOf(Object.values(dotStyleOptions)),
    dotSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

Dot.defaultProps = {
    dotStyle: dotStyleDefault,
    dotSize: iconSizeDefault,
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
};

export default Dot;
