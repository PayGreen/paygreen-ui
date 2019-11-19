import styled from 'styled-components';
import {
    textHtmlTagOptions
} from '../../../shared/constants'; 
import {
    blockSpaces,
    textStyle,
    internalParagraph
} from './base';

const TextBase = styled.p`
    ${blockSpaces};

    ${props => props.textHtmlTag === textHtmlTagOptions.div ? internalParagraph : textStyle};
`;

export { TextBase };