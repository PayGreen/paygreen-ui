import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DaInput from '../DaInput/DaInput';
import Popin from '../Popin/Popin';
import { DropdownContext } from './context/DropdownContext';
import { DropdownBase, InvisibleCloseButton } from './style';

const Dropdown = ({ children, hasOverlay, ...rest }) => {
    const [isOpen, setOpen] = useState();

    /**
     * Hook that detects when we click outside of the passed ref and when dropdown is opened and without overlay
     * @param {object} ref - reference used to detect click outside
     */
    const useOutsideAlerter = ref => {
        useEffect(() => {
            const handleClickOutside = e => {
                if (
                    isOpen &&
                    !hasOverlay &&
                    ref.current &&
                    !ref.current.contains(e.target)
                ) {
                    setOpen(false);
                }
            };

            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isOpen, hasOverlay]);
    };

    // We create the reference linked to Dropdown component and pass it to the hook
    const dropdownRef = useRef(null);
    useOutsideAlerter(dropdownRef);

    return (
        <DropdownContext.Provider value={{ isOpen, setOpen }}>
            {/*ref can only be applied on DOM element and not on react component directly*/}
            <span ref={dropdownRef}>
                <DropdownBase {...rest}>
                    {isOpen && hasOverlay ? (
                        <InvisibleCloseButton
                            onClick={() => setOpen(!isOpen)}
                        />
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
            </span>
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
