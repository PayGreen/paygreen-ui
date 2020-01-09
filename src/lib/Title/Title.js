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
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import { TitleBase } from './style';

class Title extends PureComponent {
    render() {
        return <TitleBase
            as={this.props.htmlTag}
            {...this.props}
        >
            {this.props.children}
        </TitleBase>;
    }
}

Title.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(titleHtmlTagOptions)),

    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),

    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    hasUnderline: PropTypes.bool,
};

Title.defaultProps = {
    htmlTag: titleHtmlTagDefault,

    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,

    textSize: fontSizeDefault,
    align: alignDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    hasUnderline: false,
};

export default Title;