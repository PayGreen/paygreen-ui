import styled from 'styled-components';
import { textHtmlTagOptions } from '../../../shared/constants';
import { responsiveSpaces } from './constants';
import {
    blockBackground,
    textStyle,
    internalParagraph
} from './base';

const TextBase = styled.p`
    ${responsiveSpaces('padding')};
    ${responsiveSpaces('margin')};
    ${props => blockBackground[props.colorType]};
    ${props => props.textHtmlTag === textHtmlTagOptions.div ? internalParagraph : textStyle};
`;

export { TextBase };