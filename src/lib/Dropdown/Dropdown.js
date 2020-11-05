import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DaInput from '../DaInput/DaInput';
import Popin from '../Popin/Popin';
import { DropdownBase, InvisibleCloseButton } from './style';

const Dropdown = props => {
    const [isActive, setActive] = useState(props.isActive || false);

    useEffect(() => {
        setActive(props.isActive);
    }, [props.isActive]);

    return (
        <DropdownBase {...props}>
            {isActive && !props.isActive ? (
                <InvisibleCloseButton onClick={() => setActive(!isActive)} />
            ) : null}

            {React.Children.map(props.children, (child, index) => {
                if (!child) {
                    return null;
                }

                if (child.type === DaInput) {
                    return React.cloneElement(child, {
                        onClick: () => setActive(!isActive),
                        key: index,
                    });
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

Dropdown.propTypes = {
    isActive: PropTypes.bool,
};

Dropdown.defaultProps = {
    isActive: false,
};

export default Dropdown;
