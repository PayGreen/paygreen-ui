import React from 'react';
import PropTypes from 'prop-types';
import { blockWidthOptions, blockWidthDefault } from '../../shared/constants';
import { ModalContentBase } from './style';

const ModalContent = props => {
    return (
        <ModalContentBase {...props}>
            {props.children}
        </ModalContentBase>
    );
};

Modal.propTypes = {
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
};

Modal.defaultProps = {
    blockWidth: blockWidthDefault,
};

export default ModalContent;
