import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaHelpBase } from './style';

const DaHelp = props => {
    return <DaHelpBase {...props}>{props.children}</DaHelpBase>;
};

DaHelp.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    isActive: PropTypes.bool,
};

DaHelp.defaultProps = {
    colorTheme: colorThemeDefault,
    fieldSize: buttonSizeDefault,
    disabled: false,
    readOnly: false,
    isActive: false,
};

export default DaHelp;
