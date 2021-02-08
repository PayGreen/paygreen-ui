import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { DaHelpBase } from './style';

const DaHelp = props => {
    return <DaHelpBase {...props}>{props.children}</DaHelpBase>;
};

DaHelp.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    disabled: PropTypes.bool,
    isActive: PropTypes.bool,
    isRounded: PropTypes.bool,
};

DaHelp.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
    isActive: false,
    isRounded: false,
};

export default DaHelp;
