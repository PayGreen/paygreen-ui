import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DaInput from '../DaInput/DaInput';
import Popin from '../Popin/Popin';
import { DropdownBase, InvisibleCloseButton } from './style';

const Dropdown = ({ isActive, children, ...rest }) => {
    const [isOpen, setOpen] = useState(isActive);

    useEffect(() => {
        setOpen(isActive);
    }, [isActive]);

    return (
        <DropdownBase {...rest}>
            {isOpen && !isActive ? (
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
    );
};

Dropdown.propTypes = {
    isActive: PropTypes.bool,
};

Dropdown.defaultProps = {
    isActive: false,
};

export default Dropdown;
