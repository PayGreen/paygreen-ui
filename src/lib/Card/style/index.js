import styled from 'styled-components';
import {  } from './constants';
import {
    blockStyle,
    titleOutBlockStyle
} from './base';

const CardBase = styled.div`
    ${props => props.params.titleOut ? titleOutBlockStyle : blockStyle};
`;

export { CardBase };