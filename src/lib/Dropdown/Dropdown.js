import React, { useState } from 'react';
import { DropdownBase } from './style';
import Popin from '../Popin/Popin';

const Dropdown = props => {
    const [isActive, setActive] = useState(false);

    return (
        <DropdownBase {...props}>
            {props.children.map((child, index) => {
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
