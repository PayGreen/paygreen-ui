import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    seoOptions,
    seoDefault
} from '../../shared/const';
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
            case '1':
                return <TitleH1 {...this.props}>{this.props.children}</TitleH1>;

            case '2':
                return <TitleH2 {...this.props}>{this.props.children}</TitleH2>;

            case '3':
                return <TitleH3 {...this.props}>{this.props.children}</TitleH3>;
        
            case '4':
                return <TitleH4 {...this.props}>{this.props.children}</TitleH4>;
    
            case '5':
                return <TitleH5 {...this.props}>{this.props.children}</TitleH5>;

            case '6':
                return <TitleH6 {...this.props}>{this.props.children}</TitleH6>;

            case '0':
            default:
                return <TitleSpan {...this.props}>{this.props.children}</TitleSpan>;
        }
    }
}

Title.propTypes = {
    seo: PropTypes.oneOf(Object.values(seoOptions)),
};

Title.defaultProps = {
    seo: seoDefault,
};

export default Title;