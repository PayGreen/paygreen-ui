import styled from 'styled-components';
import {
    changeColor
} from './base';

const ImageBase = styled.div`
    ${props => props.colorChange ? changeColor : null};
    height: ${props => props.theme.blockHeader[props.blockHeight]};

    img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export { ImageBase };