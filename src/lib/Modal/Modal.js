import React from 'react';
import PropTypes from 'prop-types';
import { blockWidthOptions, blockWidthDefault } from '../../shared/constants';
import { ModalBase } from './style';

const Modal = props => {
    return <ModalBase {...props}>{props.children}</ModalBase>;
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
};

Modal.defaultProps = {
    isOpen: false,
    blockWidth: blockWidthDefault,
};

export default Modal;
