import React, { useState } from 'react';
import { ModalGroupBase } from './style';
import { ModalContext } from './modalContext.js';

const ModalGroup = props => {
    const [isOpen, setOpen] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                setOpen,
            }}
        >
            <ModalGroupBase {...props}>
                {React.Children.map(props.children, child =>
                    React.cloneElement(child, {
                        isOpen: isOpen,
                    }),
                )}
            </ModalGroupBase>
        </ModalContext.Provider>
    );
};

export default ModalGroup;
