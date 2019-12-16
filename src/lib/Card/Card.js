import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault,
    shadowStyleOptions,
    shadowStyleDefault,
    blockWidthOptions,
    blockWidthDefault,
    blockSpaceOptions,
    blockSpaceDefault,
    radiusOptions,
    radiusDefault,
    gradientOptions,
    gradientDefault,
} from '../../shared/constants';
import { CardBase } from './style';

class Card extends PureComponent {
    render() {
        return <CardBase
            as={this.props.cardHtmlTag}
            {...this.props}
        >
            {this.props.children}
        </CardBase>;
    }
}

Card.propTypes = {
    cardHtmlTag: PropTypes.oneOf(Object.values(cardHtmlTagOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    shadow: PropTypes.oneOf(Object.values(shadowStyleOptions)),
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    hasBackground: PropTypes.bool,
    borderTop: PropTypes.oneOf(Object.values(gradientOptions)),
    paddingLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    params: PropTypes.shape({
        titleOut: PropTypes.bool,
    }),
};

Card.defaultProps = {
    cardHtmlTag: cardHtmlTagDefault,
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
    shadow: shadowStyleDefault,
    blockWidth: blockWidthDefault,
    radiusSize: radiusDefault,
    hasBackground: true,
    borderTop: gradientDefault,
    paddingLateral: blockSpaceDefault,
    params: {
        titleOut: false,
    },
};

export default Card;