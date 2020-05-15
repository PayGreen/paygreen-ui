import React from 'react';
import PropTypes from 'prop-types';
import {
    blockWidthOptions,
    blockWidthDefault,
    shadowSizeOptions,
    radiusOptions,
    radiusDefault,
} from '../../shared/constants';
import { PopinBase } from './style';

const Popin = props => {
    return (
        <PopinBase {...props}>
            {React.Children.map(props.children, (child, index) =>
                child ? <li key={index}>{child}</li> : null,
            )}
        </PopinBase>
    );
};

Popin.propTypes = {
    isActive: PropTypes.bool.isRequired,
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    shadowSize: PropTypes.oneOf(Object.values(shadowSizeOptions)),
};

Popin.defaultProps = {
    isActive: false,
    blockWidth: blockWidthDefault,
    radiusSize: radiusDefault,
    shadowSize: shadowSizeOptions.sm,
};

export default Popin;
