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
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    blockPaddingOptions,
    blockPaddingDefault,
    spaceOptions,
    spaceDefault
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
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    textAlign: PropTypes.oneOf(Object.values(alignOptions)),
    paddingBlock: PropTypes.oneOf(Object.values(blockPaddingOptions)),
    marginBlock: PropTypes.oneOf(Object.values(spaceOptions)),
    marginInternal: PropTypes.oneOf(Object.values(spaceOptions)),
};

Text.defaultProps = {
    textHtmlTag: textHtmlTagDefault,
    colorType: colorTypeDefault,
    mainColor: greyOptions.grey60,
    colorTheme: colorThemeDefault,
    textSize: fontSizeDefault,
    textAlign: alignDefault,
    paddingBlock: blockPaddingDefault,
    marginBlock: spaceDefault,
    marginInternal: spaceOptions.sm,
};

export default Text;