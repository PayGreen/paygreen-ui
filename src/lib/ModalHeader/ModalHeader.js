import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions } from '../../shared/constants';
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
    paddingLateral: spaceOptions.sm,
    paddingTop: spaceOptions.sm,
    paddingBottom: spaceOptions.sm,
};

export default ModalHeader;
