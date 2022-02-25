import React from 'react';
import PropTypes from 'prop-types';
import { useDropdown } from './context/DropdownContext';

const DropdownControl = props => {
    const { isOpen, setOpen } = useDropdown();

    return React.Children.map(props.children, (child, index) => {
        if (!child) {
            return null;
        } else if (props.hasOnClickControl) {
            return React.cloneElement(child, {
                onClick: () => setOpen(!isOpen),
                key: index,
            });
        } else {
            switch (child && child.type) {
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
        }
    });
};

DropdownControl.propTypes = {
    hasOnClickControl: PropTypes.bool,
};

DropdownControl.defaultProps = {
    hasOnClickControl: false,
};

export default DropdownControl;
