import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DaInput from '../DaInput/DaInput';
import Popin from '../Popin/Popin';
import { DropdownContext } from './context/DropdownContext';
import { DropdownBase, InvisibleCloseButton } from './style';

const Dropdown = ({ children, hasOverlay, ...rest }) => {
    const [isOpen, setOpen] = useState();

    return (
        <DropdownContext.Provider value={{ isOpen, setOpen }}>
            <DropdownBase {...rest}>
                {isOpen && hasOverlay ? (
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

Dropdown.propTypes = {
    hasOverlay: PropTypes.bool,
};

Dropdown.defaultProps = {
    hasOverlay: true,
};

export default Dropdown;
