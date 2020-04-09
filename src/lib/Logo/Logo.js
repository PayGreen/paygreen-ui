import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions } from '../../shared/constants';
import { LogoBase } from './style';

const Logo = props => {
    return <LogoBase {...props}>{props.children}</LogoBase>;
};

Logo.propTypes = {
    hasBaseline: PropTypes.bool,
    isWhite: PropTypes.bool,
    hasHoverRight: PropTypes.bool,
    hasHoverTop: PropTypes.bool,
    hasHoverColor: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    blockHeight: PropTypes.oneOf(Object.values(spaceOptions)),
};

Logo.defaultProps = {
    hasBaseline: true,
    isWhite: false,
    hasHoverRight: false,
    hasHoverTop: false,
    hasHoverColor: false,
    blockWidth: spaceOptions.none,
    blockHeight: spaceOptions.none,
};

export default Logo;
