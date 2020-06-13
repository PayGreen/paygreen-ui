import React from 'react';
import PropTypes from 'prop-types';
import { useModal } from './modalContext.js';
import { ModalCloseControlBase } from './style';

const ModalCloseControl = props => {
    const { isOpen, setOpen } = useModal();

    return (
        <ModalCloseControlBase {...props}>
            {React.Children.map(props.children, child => 
                React.cloneElement(child, {
                    onClick: () => setOpen(!isOpen),

                })
            )}
        </ModalCloseControlBase>
    );
};

ModalCloseControl.propTypes = {};

ModalCloseControl.defaultProps = {};

export default ModalCloseControl;
