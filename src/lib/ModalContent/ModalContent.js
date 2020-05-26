import React from 'react';
import PropTypes from 'prop-types';
import { blockWidthOptions, blockWidthDefault } from '../../shared/constants';
import { ModalContentBase } from './style';

const ModalContent = props => {
    return <ModalContentBase {...props}>{props.children}</ModalContentBase>;
};

ModalContent.propTypes = {
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
};

ModalContent.defaultProps = {
    blockWidth: blockWidthDefault,
};

export default ModalContent;
