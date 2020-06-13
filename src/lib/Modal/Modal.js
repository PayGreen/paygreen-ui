import React from 'react';
import PropTypes from 'prop-types';
import { ModalBase } from './style';

const Modal = props => {
    return <ModalBase {...props}>{props.children}</ModalBase>;
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
};

Modal.defaultProps = {
    isOpen: false,
};

export default Modal;
