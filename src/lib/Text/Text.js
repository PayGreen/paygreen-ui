import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    textHtmlTagOptions,
    textHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorNumberOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    transparentColorOptions,
    transparentColorDefault,
    radiusOptions,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    blockSpaceOptions,
    blockSpaceDefault,
    spaceOptions
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
    colorNumber: PropTypes.oneOf(Object.values(colorNumberOptions)),
    mainColor: PropTypes.oneOf(Object.values(greyOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    backgroundColor: PropTypes.oneOf(Object.values(transparentColorOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    textAlign: PropTypes.oneOf(Object.values(alignOptions)),
    underline: PropTypes.bool,

    paddingLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(blockSpaceOptions)),

    marginLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockSpaceOptions)),

    marginInternal: PropTypes.oneOf(Object.values(spaceOptions)),
};

Text.defaultProps = {
    textHtmlTag: textHtmlTagDefault,
    colorType: colorTypeDefault,
    colorNumber: colorNumberOptions.two,
    mainColor: greyOptions.grey60,
    colorTheme: colorThemeDefault,
    backgroundColor: transparentColorDefault,
    radiusSize: radiusOptions.none,
    textSize: fontSizeDefault,
    textAlign: alignDefault,
    underline: false,

    paddingLateral: blockSpaceDefault,
    paddingTop: blockSpaceDefault,
    paddingBottom: blockSpaceDefault,

    marginLateral: blockSpaceDefault,
    marginTop: blockSpaceDefault,
    marginBottom: blockSpaceDefault,

    marginInternal: spaceOptions.sm,
};

export default Text;