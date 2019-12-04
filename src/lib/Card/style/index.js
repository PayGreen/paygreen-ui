import styled from 'styled-components';
import { ImageBase } from '../../Image/style';
import {
    blockStyle,
    titleOutBlockStyle
} from './base';

const CardBase = styled.div`
    ${props => props.params.titleOut ? titleOutBlockStyle : blockStyle};

    ${ImageBase} {
        height: ${props => props.theme.blockHeader[props.blockWidth]};
    }
`;

export { CardBase };