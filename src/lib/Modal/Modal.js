import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { ModalBase } from './style';

const Modal = props => {
    const [isOpenState, setOpen] = useState(props.isOpen);

    useEffect(() => {
        setOpen(props.isOpen)
    }, [props.isOpen]);

    console.log('state', isOpenState)
    return (
        <ModalBase {...props}>
          {props.children}
        </ModalBase>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
};

Modal.defaultProps = {
    isOpen: true,
};

export default Modal;
