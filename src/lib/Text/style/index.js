import styled from 'styled-components';
import {
    textHtmlTagOptions
} from '../../../shared/constants'; 
import {
    blockSpaces,
    blockBackground,
    textStyle,
    internalParagraph
} from './base';

const TextBase = styled.p`
    ${blockSpaces};
    ${props => blockBackground[props.colorType]};

    ${props => props.textHtmlTag === textHtmlTagOptions.div ? internalParagraph : textStyle};
`;

export { TextBase };