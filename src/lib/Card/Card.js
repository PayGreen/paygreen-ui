import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
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
};

Card.defaultProps = {
    cardHtmlTag: cardHtmlTagDefault,
};

export default Card;