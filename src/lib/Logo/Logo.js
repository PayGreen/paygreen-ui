import React from 'react';
import PropTypes from 'prop-types';
import {
    spaceOptions,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    blockWidthOptions,
} from '../../shared/constants';
import { LogoBase } from './style';

const Logo = props => {
    const hasText = props.text && props.text.length;

    return (
        <LogoBase {...props}>
            <span className="logo">{props.children}</span>

            {hasText ? <span className="text">{props.text}</span> : null}
        </LogoBase>
    );
};

Logo.propTypes = {
    hasBaseline: PropTypes.bool,
    isWhite: PropTypes.bool,
    hasHoverRight: PropTypes.bool,
    hasHoverTop: PropTypes.bool,
    hasHoverColor: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    blockHeight: PropTypes.oneOf(Object.values(spaceOptions)),
    text: PropTypes.string,
    textSize: PropTypes.oneOf(Object.values(blockWidthOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    gradient: PropTypes.oneOf(Object.values(gradientOptions)),
};

Logo.defaultProps = {
    hasBaseline: true,
    isWhite: false,
    hasHoverRight: false,
    hasHoverTop: false,
    hasHoverColor: false,
    blockWidth: spaceOptions.none,
    blockHeight: spaceOptions.none,
    textSize: blockWidthOptions.sm,
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme,
};

export default Logo;
