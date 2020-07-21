import React, { useState } from 'react';
import Popin from '../Popin/Popin';
import { DropdownBase, InvisibleCloseButton } from './style';

const Dropdown = props => {
    const [isActive, setActive] = useState(false);

    return (
        <DropdownBase {...props}>
            {isActive ? (
                <InvisibleCloseButton onClick={() => setActive(!isActive)} />
            ) : null}

            {React.Children.map(props.children, (child, index) => {
                if (!child) {
                    return null;
                }

                if (child.type === Popin) {
                    return React.cloneElement(child, {
                        isActive: isActive,
                        key: index,
                    });
                }

                return React.cloneElement(child, {
                    onClick: () => setActive(!isActive),
                    isActive: isActive,
                    key: index,
                });
            })}
        </DropdownBase>
    );
};

export default Dropdown;
