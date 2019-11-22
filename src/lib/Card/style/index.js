import styled from 'styled-components';
import {
    blockStyle,
    titleOutBlockStyle
} from './base';

const CardBase = styled.div`
    ${props => props.params.titleOut ? titleOutBlockStyle : blockStyle};

    figure {
        height: ${props => props.theme.blockHeader[props.blockWidth]};
    }
`;

export { CardBase };