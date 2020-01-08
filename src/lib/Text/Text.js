import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    textHtmlTagOptions,
    textHtmlTagDefault,

    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,

    radiusOptions,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { TextBase } from './style';

class Text extends PureComponent {
    render() {
        return <TextBase
            as={this.props.textHtmlTag}
            {...this.props}
        >
            {this.props.children}
        </TextBase>;
    }
}

Text.propTypes = {
    textHtmlTag: PropTypes.oneOf(Object.values(textHtmlTagOptions)),

    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),

    hasBackground: PropTypes.bool,
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    textAlign: PropTypes.oneOf(Object.values(alignOptions)),
    underline: PropTypes.bool,

    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),

    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),

    marginInternal: PropTypes.oneOf(Object.values(spaceOptions)),
};

Text.defaultProps = {
    textHtmlTag: textHtmlTagDefault,

    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey60,
    colorStatus: formStatusDefault,

    hasBackground: false,
    radiusSize: radiusOptions.none,
    textSize: fontSizeDefault,
    textAlign: alignDefault,
    underline: false,

    paddingLateral: spaceDefault,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,

    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,

    marginInternal: spaceOptions.sm,
};

export default Text;