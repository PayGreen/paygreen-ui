import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    seoOptions,
    seoDefault,
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
import {
    TitleH1,
    TitleH2,
    TitleH3,
    TitleH4,
    TitleH5,
    TitleH6,
    TitleSpan
} from './style';

class Title extends PureComponent {
    render() {
        switch (this.props.seo) {
            case seoOptions.h1:
                return <TitleH1 {...this.props}>{this.props.children}</TitleH1>;

            case seoOptions.h2:
                return <TitleH2 {...this.props}>{this.props.children}</TitleH2>;

            case seoOptions.h3:
                return <TitleH3 {...this.props}>{this.props.children}</TitleH3>;
        
            case seoOptions.h4:
                return <TitleH4 {...this.props}>{this.props.children}</TitleH4>;
    
            case seoOptions.h5:
                return <TitleH5 {...this.props}>{this.props.children}</TitleH5>;

            case seoOptions.h6:
                return <TitleH6 {...this.props}>{this.props.children}</TitleH6>;

            case seoOptions.span:
            default:
                return <TitleSpan {...this.props}>{this.props.children}</TitleSpan>;
        }
    }
}

Title.propTypes = {
    seo: PropTypes.oneOf(Object.values(seoOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorNumber: PropTypes.oneOf(Object.values(colorNumberOptions)),
    color: PropTypes.oneOf(Object.values(colorThemeOptions)),
    color2: PropTypes.oneOf(Object.values(greyOptions)),
    size: PropTypes.oneOf(Object.values(fontSizeOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    underline: PropTypes.bool,
};

Title.defaultProps = {
    seo: seoDefault,
    colorType: colorTypeDefault,
    colorNumber: colorNumberDefault,
    color: colorThemeDefault,
    color2: greyDefault,
    size: fontSizeDefault,
    align: alignDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    underline: false,
};

export default Title;