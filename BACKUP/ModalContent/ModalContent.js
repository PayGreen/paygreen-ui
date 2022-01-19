import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions } from '../../shared/constants';
import { ModalContentBase } from './style';

const ModalContent = props => {
    return <ModalContentBase {...props}>{props.children}</ModalContentBase>;
};

ModalContent.propTypes = {
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
};

ModalContent.defaultProps = {
    blockWidth: spaceOptions.md,
};

export default ModalContent;
