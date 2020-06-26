import React, { useState } from 'react';
import { FormControlBase } from './style';

const FormControl = props => {
    const [isOpen, setOpen] = useState(false);

    return (
        <FormControlBase {...props}>
            {React.Children.map(props.children, child =>
                React.cloneElement(child, {
                    isOpen: isOpen,
                }),
            )}
        </FormControlBase>
    );
};

export default FormControl;
