import React from 'react';
import PropTypes from 'prop-types';
import {
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
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    shadowSize: PropTypes.oneOf(Object.values(shadowSizeOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
};

Popin.defaultProps = {
    isActive: false,
    marginTop: spaceDefault,
    blockWidth: spaceOptions.md,
    radiusSize: radiusDefault,
    shadowSize: shadowSizeOptions.sm,
    align: alignDefault,
};

export default Popin;
