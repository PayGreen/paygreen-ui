import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    titleHtmlTagOptions,
    titleHtmlTagDefault,

    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,

    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    blockSpaceOptions,
    blockSpaceDefault
} from '../../shared/constants';
import { TitleBase } from './style';

class Title extends PureComponent {
    render() {
        return <TitleBase
            as={this.props.titleHtmlTag}
            {...this.props}
        >
            {this.props.children}
        </TitleBase>;
    }
}

Title.propTypes = {
    titleHtmlTag: PropTypes.oneOf(Object.values(titleHtmlTagOptions)),

    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),

    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    textAlign: PropTypes.oneOf(Object.values(alignOptions)),
    marginLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    underline: PropTypes.bool,
};

Title.defaultProps = {
    titleHtmlTag: titleHtmlTagDefault,

    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,

    textSize: fontSizeDefault,
    textAlign: alignDefault,
    marginLateral: blockSpaceDefault,
    marginTop: blockSpaceDefault,
    underline: false,
};

export default Title;