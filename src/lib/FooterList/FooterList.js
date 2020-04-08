import React from 'react';
import PropTypes from 'prop-types';
import {
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { FooterListBase } from './style';

const FooterList = props => {
    return (
        <FooterListBase {...props}>
            {React.Children.map(props.children, (child, index) =>
                child ? <li key={index}>{child}</li> : null,
            )}
        </FooterListBase>
    );
};

FooterList.propTypes = {
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

FooterList.defaultProps = {
    textSize: fontSizeDefault,
    align: alignDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default FooterList;
