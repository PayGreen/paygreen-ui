import styled from 'styled-components';
import {  } from './constants';
import {
    backgroundStyle
} from './base';

const CardBase = styled.div`
    ${props => props.hasBackground ? backgroundStyle[props.colorType] : null};
    max-width: ${props => props.theme.block.width[props.blockSize]};
    transition: all ${props => props.theme.transition.sm};
`;

export { CardBase };