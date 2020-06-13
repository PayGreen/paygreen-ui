import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalWrapperBase } from './style';
import { ModalContext } from './modalContext.js';

const ModalWrapper = props => {
    const [isOpen, setOpen] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                setOpen,
            }}
        >
            <ModalWrapperBase {...props}>
                {props.children.map(child => {
                    return React.cloneElement(child, {
                        isOpen: isOpen,
                    });
                })}
            </ModalWrapperBase>
        </ModalContext.Provider>
    );
};

ModalWrapper.propTypes = {};

ModalWrapper.defaultProps = {};

export default ModalWrapper;
