import styled from 'styled-components';
import { ImageBase } from '../../Image/style';
import {
    blockStyle,
    titleOutBlockStyle
} from './base';

const CardBase = styled.div`
    ${props => props.hasTitleOut ? titleOutBlockStyle : blockStyle};

    ${ImageBase}:first-child {
        height: ${props => props.theme.blockHeader[props.blockWidth]};
    }
`;

export { CardBase };