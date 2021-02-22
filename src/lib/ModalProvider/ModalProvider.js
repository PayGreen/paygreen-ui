import React, { useState } from 'react';
import AutoBlockScroll from '../GlobalStyle/AutoBlockScroll';
import { ModalContext } from './context/ModalContext';

const ModalProvider = props => {
    const [isOpen, setOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setOpen }}>
            {isOpen ? (
                <AutoBlockScroll
                    theme={props.theme} // not necessary, only needed for tests
                />
            ) : null}

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

export default ModalProvider;
