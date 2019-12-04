import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    baseline: PropTypes.bool,
    white: PropTypes.bool,
    hoverRight: PropTypes.bool,
    hoverTop: PropTypes.bool,
    hoverColor: PropTypes.bool
};

Logo.defaultProps = {
    baseline: true,
    white: false,
    hoverRight: false,
    hoverTop: false,
    hoverColor: false
};

export default Logo;