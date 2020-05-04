import React from 'react';
import PropTypes from 'prop-types';
import {
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault,
    shadowSizeOptions,
    shadowSizeDefault,
    blockWidthOptions,
    blockWidthDefault,
    spaceOptions,
    spaceDefault,
    radiusOptions,
    radiusDefault,
    gradientOptions,
    gradientDefault,
} from '../../shared/constants';
import { CardBase } from './style';

const Card = props => {
    return (
        <CardBase as={props.htmlTag} {...props}>
            {props.children}
        </CardBase>
    );
};

Card.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(cardHtmlTagOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorBgTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    shadowSize: PropTypes.oneOf(Object.values(shadowSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    hasBackground: PropTypes.bool,
    borderTop: PropTypes.oneOf(Object.values(gradientOptions)),
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    hasTitleOut: PropTypes.bool,
};

Card.defaultProps = {
    htmlTag: cardHtmlTagDefault,
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
    shadowSize: shadowSizeDefault,
    blockWidth: blockWidthDefault,
    radiusSize: radiusDefault,
    hasBackground: true,
    borderTop: gradientDefault,
    paddingLateral: spaceDefault,
    hasTitleOut: false,
};

export default Card;
