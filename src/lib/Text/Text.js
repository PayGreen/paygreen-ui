import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    textHtmlTagOptions,
    textHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    transparentColorOptions,
    transparentColorDefault,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    blockPaddingOptions,
    blockPaddingDefault,
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
    mainColor: PropTypes.oneOf(Object.values(greyOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    backgroundColor: PropTypes.oneOf(Object.values(transparentColorOptions)),
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    textAlign: PropTypes.oneOf(Object.values(alignOptions)),
    paddingBlock: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    paddingTop: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    marginTop: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    marginInternal: PropTypes.oneOf(Object.values(spaceOptions)),
};

Text.defaultProps = {
    textHtmlTag: textHtmlTagDefault,
    colorType: colorTypeDefault,
    mainColor: greyOptions.grey60,
    colorTheme: colorThemeDefault,
    backgroundColor: transparentColorDefault,
    textSize: fontSizeDefault,
    textAlign: alignDefault,
    paddingBlock: blockPaddingDefault,
    paddingTop: blockPaddingDefault,
    paddingBottom: blockPaddingDefault,
    marginTop: blockPaddingDefault,
    marginBottom: blockPaddingDefault,
    marginInternal: spaceOptions.sm,
};

export default Text;