import React, { PureComponent } from 'react';
import styled from 'styled-components';

const icons = {
    'arrow-bottom': 'M70.6,105.3c-1,0-2-0.4-2.6-1.2l-48.2-55c-1.3-1.5-1.1-3.7,0.3-4.9c1.5-1.3,3.7-1.1,4.9,0.3l45.6,52l45-52c1.3-1.5,3.5-1.6,4.9-0.4c1.5,1.3,1.6,3.5,0.4,4.9l-47.6,55C72.6,104.9,71.6,105.3,70.6,105.3L70.6,105.3z'
}

const Icon = (props) => {
    return (
        <svg
            version="1.1"
            id="Calque_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            viewBox="0 0 143 143"
        >
            <path d={icons[props.icon]}></path>
        </svg>
    );
}

export default Icon;
