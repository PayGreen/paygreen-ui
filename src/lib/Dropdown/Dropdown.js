import React, { useState } from 'react';
import DaInput from '../DaInput/DaInput';
import Popin from '../Popin/Popin';
import { DropdownContext } from './DropdownContext';
import { DropdownBase, InvisibleCloseButton } from './style';

const Dropdown = ({ children, ...rest }) => {
    const [isOpen, setOpen] = useState();

    return (
        <DropdownContext.Provider value={{ isOpen, setOpen }}>
            <DropdownBase {...rest}>
                {isOpen ? (
                    <InvisibleCloseButton onClick={() => setOpen(!isOpen)} />
                ) : null}

                {React.Children.map(children, (child, index) => {
                    switch (child && child.type) {
                        case null:
                            return null;

                        case DaInput:
                            return React.cloneElement(child, {
                                onClick: () => setOpen(!isOpen),
                                key: index,
                            });

                        case Popin:
                            return React.cloneElement(child, {
                                isActive: isOpen,
                                key: index,
                            });

                        default:
                            return React.cloneElement(child, {
                                onClick: () => setOpen(!isOpen),
                                isActive: isOpen,
                                key: index,
                            });
                    }
                })}
            </DropdownBase>
        </DropdownContext.Provider>
    );
};

export default Dropdown;
