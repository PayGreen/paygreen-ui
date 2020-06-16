import React from 'react';
import { useModal } from './ModalContext';
import { ModalCloseControlBase } from './style';

const ModalCloseControl = props => {
    const { isOpen, setOpen } = useModal();

    return (
        <ModalCloseControlBase {...props}>
            {React.Children.map(props.children, child =>
                React.cloneElement(child, {
                    onClick: () => setOpen(!isOpen),
                }),
            )}
        </ModalCloseControlBase>
    );
};

export default ModalCloseControl;
