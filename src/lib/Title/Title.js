import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    titleHtmlTagOptions,
    titleHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorNumberOptions,
    colorNumberDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
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
    colorNumber: PropTypes.oneOf(Object.values(colorNumberOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    color2: PropTypes.oneOf(Object.values(greyOptions)),
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    textAlign: PropTypes.oneOf(Object.values(alignOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    underline: PropTypes.bool,
};

Title.defaultProps = {
    titleHtmlTag: titleHtmlTagDefault,
    colorType: colorTypeDefault,
    colorNumber: colorNumberDefault,
    colorTheme: colorThemeDefault,
    color2: greyDefault,
    textSize: fontSizeDefault,
    textAlign: alignDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    underline: false,
};

export default Title;