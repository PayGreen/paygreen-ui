import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions } from '../../shared/constants';
import { ModalBodyBase } from './style';

const ModalBody = props => {
    return <ModalBodyBase {...props}>{props.children}</ModalBodyBase>;
};

ModalBody.propTypes = {
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

ModalBody.defaultProps = {
    paddingLateral: spaceOptions.sm,
    paddingTop: spaceOptions.sm,
    paddingBottom: spaceOptions.sm,
};

export default ModalBody;
