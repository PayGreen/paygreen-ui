import React from 'react';
import PropTypes from 'prop-types';
import {
    hoverDirectionOptions,
    hoverDirectionDefault,
    colorTypeOptions,
    spaceOptions,
    alignOptions,
} from '../../shared/constants';
import { LogoBase } from './style';

const Logo = ({ children, badge, ...rest }) => {
    return (
        <LogoBase {...rest}>
            <span className="logo">{children}</span>

            {badge
                ? React.cloneElement(badge, {
                      colorType: rest.isWhite
                          ? colorTypeOptions.reverse
                          : colorTypeOptions.original,
                  })
                : null}
        </LogoBase>
    );
};

Logo.propTypes = {
    hasBaseline: PropTypes.bool,
    isWhite: PropTypes.bool,
    hasThemeColor: PropTypes.bool,
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
    hasThemeColor: false,
    hasHoverColor: false,
    hoverDirection: hoverDirectionDefault,
    blockWidth: spaceOptions.none,
    blockHeight: spaceOptions.none,
    align: alignOptions.center,
};

export default Logo;
