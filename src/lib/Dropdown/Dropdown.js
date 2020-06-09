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

                if (child.props.name === 'Popin') {
                    return React.cloneElement(child, { isActive: isActive });
                }

                return React.cloneElement(child, {
                    onClick: () => setActive(!isActive),
                    isActive: isActive,
                });
            })}
        </DropdownBase>
    );
};

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default Dropdown;
