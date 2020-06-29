import React from 'react';
import { FormControlBase } from './style';

const FormControl = props => {

    return (
        <FormControlBase {...props}>
            {props.isDisabled? React.Children.map(props.children, child =>
                React.cloneElement(child, {
                    disabled: true,
                }),
            ): null}
            {props.children}
        </FormControlBase>
    );
};

export default FormControl;
