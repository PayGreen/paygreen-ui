import React from 'react';
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

const Text = props => {
    return (
        <TextBase as={props.htmlTag} {...props}>
            {props.children}
        </TextBase>
    );
};

Text.propTypes = {
    htmlTag: PropTypes.oneOf(Object.values(textHtmlTagOptions)),

    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),

    hasUppercase: PropTypes.bool,
    hasBackground: PropTypes.bool,
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
    hasUnderline: PropTypes.bool,

    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),

    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),

    marginInternal: PropTypes.oneOf(Object.values(spaceOptions)),
};

Text.defaultProps = {
    htmlTag: textHtmlTagDefault,

    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey60,
    colorStatus: formStatusDefault,

    hasUppercase: false,
    hasBackground: false,
    radiusSize: radiusOptions.none,
    textSize: fontSizeDefault,
    align: alignDefault,
    hasUnderline: false,

    paddingLateral: spaceDefault,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,

    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,

    marginInternal: spaceOptions.sm,
};

export default Text;
