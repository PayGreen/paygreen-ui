import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions, spaceDefault } from '../../shared/constants';
import { BoxBase } from './style';

const Box = props => {
    return <BoxBase {...props}>{props.children}</BoxBase>;
};

Box.propTypes = {
    padding: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingRight: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    margin: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Box.defaultProps = {
    padding: spaceDefault,
    margin: spaceDefault,
};

export default Box;
