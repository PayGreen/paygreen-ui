import React from 'react';
import { StepNavbarBase } from './style';

const StepNavbar = props => {
    return (
        <StepNavbarBase {...props}>
            {props.children}
        </StepNavbarBase>
    );
};

export default StepNavbar;
