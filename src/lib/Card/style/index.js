import styled from 'styled-components';
import {  } from './constants';
import {
    backgroundStyle
} from './base';

const CardBase = styled.div`
    ${props => props.hasBackground ? backgroundStyle[props.colorType] : null};
`;

export { CardBase };