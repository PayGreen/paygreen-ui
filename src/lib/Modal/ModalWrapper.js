import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalWrapperBase } from './style';
import { ModalContext } from './authModal.js';

const ModalWrapper = props => {
    const [isActive, setActive] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                isActive,
                setActive,
            }}
        >
            <ModalWrapperBase {...props}>
                {props.children.map(child => {
                    if (child.props.name === 'Modal') {
                        console.log('test1')
                        return React.cloneElement(child, {
                            isActive: isActive,
                        });
                    } else 
                    console.log('test2')
                    return child;
                })}
            </ModalWrapperBase>
        </ModalContext.Provider>
    );
};

ModalWrapper.propTypes = {};

ModalWrapper.defaultProps = {};

export default ModalWrapper;
