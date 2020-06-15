import React, { useState } from 'react';
import { DropdownBase } from './style';

const Dropdown = props => {
    const [isActive, setActive] = useState(false);

    return (
        <DropdownBase {...props}>
            {props.children.map(child => {
                if (!child) {
                    return null;
                }

                return React.cloneElement(child, {
                    onClick: () => setActive(!isActive),
                    isActive: isActive,
                });
            })}
        </DropdownBase>
    );
};

export default Dropdown;
