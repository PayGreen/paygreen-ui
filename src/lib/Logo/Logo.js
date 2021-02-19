import React from 'react';
import PropTypes from 'prop-types';
import {
    hoverDirectionOptions,
    hoverDirectionDefault,
    spaceOptions,
    alignOptions,
} from '../../shared/constants';
import { LogoBase } from './style';

const Logo = props => {
    return (
        <LogoBase {...props}>
            <span className="logo">{props.children}</span>

            {props.badge ? props.badge : null}
        </LogoBase>
    );
};

Logo.propTypes = {
    hasBaseline: PropTypes.bool,
    isWhite: PropTypes.bool,
    hasHoverColor: PropTypes.bool,
    hoverDirection: PropTypes.oneOf(Object.values(hoverDirectionOptions)),
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    blockHeight: PropTypes.oneOf(Object.values(spaceOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
    badge: PropTypes.element,
};

Logo.defaultProps = {
    hasBaseline: true,
    isWhite: false,
    hasHoverColor: false,
    hoverDirection: hoverDirectionDefault,
    blockWidth: spaceOptions.none,
    blockHeight: spaceOptions.none,
    align: alignOptions.center,
};

export default Logo;
