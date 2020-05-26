import React from 'react';
import { ModalBodyBase } from './style';

const ModalBody = props => {
    return (
        <ModalBodyBase {...props}>
            {props.children}
        </ModalBodyBase>
    );
};

export default ModalBody;
