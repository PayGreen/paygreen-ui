import React from 'react';
import PropTypes from 'prop-types';
import { useModal } from './authModal.js';
import { ModalCloseControlBase } from './style';

const ModalCloseControl = props => {
    const { isActive, setActive } = useModal();

    return (
        <ModalCloseControlBase {...props}>
            {React.Children.map(props.children, child => 
                React.cloneElement(child, {
                    onClick: () => setActive(!isActive),
                    isActive: isActive,
                })
            )}
        </ModalCloseControlBase>
    );
};

ModalCloseControl.propTypes = {};

ModalCloseControl.defaultProps = {};

export default ModalCloseControl;
