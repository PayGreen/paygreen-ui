import React from 'react';
import { useDropdown } from './context/DropdownContext';

const DropdownControl = props => {
    const { isOpen, setOpen } = useDropdown();

    return React.Children.map(props.children, (child, index) => {
        switch (child && child.type) {
            case null:
                return null;

            case 'a':
            case 'button':
                return React.cloneElement(child, {
                    onClick: () => setOpen(!isOpen),
                    key: index,
                });

            default:
                return React.cloneElement(child, {
                    setOpen: setOpen,
                    isOpen: isOpen,
                    key: index,
                });
        }
    });
};

export default DropdownControl;
