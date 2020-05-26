import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions, spaceDefault } from '../../shared/constants';
import { ModalHeaderBase } from './style';

const ModalHeader = props => {
    return <ModalHeaderBase {...props}>{props.children}</ModalHeaderBase>;
};

ModalHeader.propTypes = {
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

ModalHeader.defaultProps = {
    paddingLateral: spaceDefault,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,
};

export default ModalHeader;
