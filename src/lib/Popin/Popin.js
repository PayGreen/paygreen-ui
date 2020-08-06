import React from 'react';
import PropTypes from 'prop-types';
import {
    blockWidthOptions,
    blockWidthDefault,
    shadowSizeOptions,
    radiusOptions,
    radiusDefault,
    spaceOptions,
    spaceDefault,
    alignOptions,
    alignDefault,
} from '../../shared/constants';
import { PopinBase } from './style';

const Popin = props => {
    return <PopinBase {...props}>{props.children}</PopinBase>;
};

Popin.propTypes = {
    isActive: PropTypes.bool,
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    shadowSize: PropTypes.oneOf(Object.values(shadowSizeOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
    hasStyle: PropTypes.bool,
};

Popin.defaultProps = {
    isActive: false,
    marginTop: spaceDefault,
    blockWidth: blockWidthDefault,
    radiusSize: radiusDefault,
    shadowSize: shadowSizeOptions.sm,
    align: alignDefault,
    hasStyle: true,
};

export default Popin;
