import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import { useModal } from './context/ModalContext';

const ModalControl = props => {
    const { isOpen, setOpen } = useModal();

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
                case Overlay:
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

ModalControl.propTypes = {
    hasOnClickControl: PropTypes.bool,
};

ModalControl.defaultProps = {
    hasOnClickControl: false,
};

export default ModalControl;
