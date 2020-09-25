import React, { useState } from 'react';
import { ModalNoScrollStyle } from './style';
import { ModalContext } from './ModalContext';

const ModalGroup = props => {
    const [isOpen, setOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setOpen }}>
            {isOpen ? <ModalNoScrollStyle /> : null}

            {React.Children.map(props.children, child => {
                if (!child) {
                    return null;
                } else {
                    return React.cloneElement(child, { isOpen: isOpen });
                }
            })}
        </ModalContext.Provider>
    );
};

export default ModalGroup;
