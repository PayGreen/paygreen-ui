import React from 'react';
import PropTypes from 'prop-types';
import { blockWidthOptions, blockWidthDefault } from '../../shared/constants';
import { ModalBase, Overlay, ModalContent } from './style';

const Modal = props => {
    const { children, ...otherProps } = props;
    return (
        <ModalBase {...props}>
            <Overlay {...otherProps} />

            <ModalContent {...otherProps}>{props.children}</ModalContent>
        </ModalBase>
    );
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
