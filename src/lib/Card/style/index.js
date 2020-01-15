import styled from 'styled-components';
import { blockStyle, titleOutBlockStyle } from './base';

const CardBase = styled.div`
    ${props => props.hasTitleOut ? titleOutBlockStyle : blockStyle};
`;

export { CardBase };