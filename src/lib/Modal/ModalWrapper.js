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
                {React.Children.map(props.children, child =>
                    React.cloneElement(child, {
                        isOpen: isOpen,
                    }),
                )}
            </ModalWrapperBase>
        </ModalContext.Provider>
    );
};

ModalWrapper.propTypes = {};

ModalWrapper.defaultProps = {};

export default ModalWrapper;
