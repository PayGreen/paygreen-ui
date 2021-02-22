import React from 'react';
import PropTypes from 'prop-types';
import {
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    colorThemeOptions,
    colorThemeDefault,
    shadowSizeOptions,
    shadowSizeDefault,
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
        <CardBase
            as={props.htmlTag}
            type={props.htmlTag === cardHtmlTagOptions.button ? 'button' : null}
            {...props}
        >
            {props.children}
        </CardBase>
    );
};

Card.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(cardHtmlTagOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    shadowSize: PropTypes.oneOf(Object.values(shadowSizeOptions)),
    isShadowWab: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    hasBackground: PropTypes.bool,
    borderTop: PropTypes.oneOf(Object.values(gradientOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    hasTitleOut: PropTypes.bool,
    hasDashedBorder: PropTypes.bool,
};

Card.defaultProps = {
    htmlTag: cardHtmlTagDefault,
    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.white00,
    colorStatus: formStatusDefault,
    shadowSize: shadowSizeDefault,
    isShadowWab: false,
    blockWidth: spaceOptions.md,
    radiusSize: radiusDefault,
    hasBackground: true,
    borderTop: gradientDefault,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,
    paddingLateral: spaceDefault,
    hasTitleOut: false,
    hasDashedBorder: false,
};

export default Card;
