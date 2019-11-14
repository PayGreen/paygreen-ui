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
    radiusOptions,
    radiusDefault,
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
};

Card.defaultProps = {
    cardHtmlTag: cardHtmlTagDefault,
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
    shadow: shadowStyleDefault,
    blockWidth: blockWidthDefault,
    radiusSize: radiusDefault,
    hasBackground: true,
};

export default Card;