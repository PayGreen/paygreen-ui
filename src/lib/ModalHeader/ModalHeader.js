import React from 'react';
import { ModalHeaderBase } from './style';

const ModalHeader = props => {
    return (
        <ModalHeaderBase {...props}>
            {props.children}
        </ModalHeaderBase>
    );
};

export default ModalHeader;
