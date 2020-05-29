import React from 'react';
import PropTypes from 'prop-types';
import {
    spaceOptions,
    spaceDefault,
    colorTypeOptions,
    colorPalletOptions,
    colorThemeOptions,
    colorTypeDefault,
    colorPalletDefault,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import { HRBase } from './style';

const HR = props => {
    return <HRBase {...props} />;
};

HR.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),

    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),

    opacity: PropTypes.number,
};

HR.defaultProps = {
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,

    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,

    opacity: 100, // Range 0(transparent) to 100(opaque)
};

export default HR;
