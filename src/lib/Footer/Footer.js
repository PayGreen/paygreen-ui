import React from 'react';
import PropTypes from 'prop-types';
import { decorationOptions, decorationDefault } from '../../shared/constants';
import { FooterBase } from './style';
import { waveTop } from './style/waveTop';

const Footer = props => {
    return (
        <FooterBase {...props}>
            {props.topStyle !== decorationOptions.none ? waveTop : null}
            {props.children}
        </FooterBase>
    );
};

Footer.propTypes = {
    topStyle: PropTypes.oneOf(Object.values(decorationOptions)),
};

Footer.defaultProps = {
    topStyle: decorationDefault,
};

export default Footer;
