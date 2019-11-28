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
            {...this.props}
        >
            {this.props.children}
        </LinkBase>;
    }
}

Link.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    underline: PropTypes.bool
};

Link.defaultProps = {
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
    underline: true
};

export default Link;