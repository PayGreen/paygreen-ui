import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { spaceOptions } from '../../shared/constants';
import { LogoBase } from './style';

class Logo extends PureComponent {
    render() {
        return <LogoBase
            {...this.props}
        >
            {this.props.children}
        </LogoBase>;
    }
}

Logo.propTypes = {
    hasBaseline: PropTypes.bool,
    isWhite: PropTypes.bool,
    hoverRight: PropTypes.bool,
    hoverTop: PropTypes.bool,
    hoverColor: PropTypes.bool,
    logoWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    logoHeight: PropTypes.oneOf(Object.values(spaceOptions)),
};

Logo.defaultProps = {
    hasBaseline: true,
    isWhite: false,
    hoverRight: false,
    hoverTop: false,
    hoverColor: false,
    logoWidth: spaceOptions.none,
    logoHeight: spaceOptions.none,
};

export default Logo;