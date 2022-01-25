import React from 'react';
import PropTypes from 'prop-types';
import {
    shadowSizeOptions,
    radiusOptions,
    radiusDefault,
    spaceOptions,
    spaceDefault,
    blockPositionOptions,
} from '../../shared/constants';
import { PopinBase } from './style';

const Popin = ({ align, children, ...rest }) => {
    let blockPosition = align;

    switch (blockPosition) {
        case blockPositionOptions.left:
        case blockPositionOptions.none:
            blockPosition = blockPositionOptions.bottomLeft;
            break;

        case blockPositionOptions.center:
            blockPosition = blockPositionOptions.bottomCenter;
            break;

        case blockPositionOptions.right:
            blockPosition = blockPositionOptions.bottomRight;
            break;
    }

    return (
        <PopinBase {...rest} align={blockPosition}>
            {children}
        </PopinBase>
    );
};

Popin.propTypes = {
    isActive: PropTypes.bool,
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    shadowSize: PropTypes.oneOf(Object.values(shadowSizeOptions)),
    align: PropTypes.oneOf(Object.values(blockPositionOptions)),
};

Popin.defaultProps = {
    isActive: false,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    blockWidth: spaceOptions.md,
    radiusSize: radiusDefault,
    shadowSize: shadowSizeOptions.sm,
    align: blockPositionOptions.bottomLeft,
};

export default Popin;
