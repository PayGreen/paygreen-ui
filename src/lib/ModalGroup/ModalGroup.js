import React, { useState } from 'react';
import { ModalGroupBase, ModalNoScrollStyle } from './style';
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
            {/* necessary to prevent scrolling when modal is opened */}
            {isOpen ? <ModalNoScrollStyle /> : null}

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
