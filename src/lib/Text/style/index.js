import styled from 'styled-components';
import { textHtmlTagOptions } from '../../../shared/constants';
import { responsiveSpaces } from '../../../shared/spaces';
import { underline } from '../../Title/style/base';
import {
    spanStyle,
    uppercaseStyle,
    blockBackground,
    textStyle,
    internalParagraph,
    italicStyle,
    boldStyle
} from './base';

const TextBase = styled.p`
    ${responsiveSpaces('padding')};
    ${responsiveSpaces('margin')};
    border-radius: ${props => props.theme.radius[props.radiusSize]};
    ${props => props.hasBackground ? blockBackground[props.colorType] : null};
    ${props => props.htmlTag === textHtmlTagOptions.div ? internalParagraph : textStyle};
    ${props => props.htmlTag === textHtmlTagOptions.span ? spanStyle : null};
    ${props => props.htmlTag === textHtmlTagOptions.em ? italicStyle : null};
    ${props => props.htmlTag === textHtmlTagOptions.strong ? boldStyle : null};
    ${props => props.hasUppercase ? uppercaseStyle : null};
    ${props => props.hasUnderline ? underline : null};
`;

export { TextBase };