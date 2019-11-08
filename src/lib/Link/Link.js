import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import { LinkBase } from './style';

class Link extends PureComponent {
    render() {
        return <LinkBase
            theme={this.props.theme} // not necessary, only needed for tests
            colorType={this.props.colorType}
            colorTheme={this.props.colorTheme}
        >
            {this.props.children}
        </LinkBase>;
    }
}

Link.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

Link.defaultProps = {
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
};

export default Link;