import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import { underline } from '../../Title/style/base';
import {
    htmlTagStyle,
    uppercaseStyle,
    color,
    blockBackground,
    minimizeText,
} from './base';

const TextBase = styled.p`
    ${responsiveSpaces('margin')};
    line-height: ${props => props.theme.font.lineHeight.md};
    text-align: ${props => props.align};
    font-size: ${props => props.theme.font.size[props.textSize]};

    ${props => (props.isResponsive ? minimizeText : null)};
    ${props => htmlTagStyle[props.htmlTag]};
    ${props => color[props.colorType]};
    ${props => (props.hasBackground ? blockBackground[props.colorType] : null)};
    ${props => (props.hasUppercase ? uppercaseStyle : null)};
    ${props => (props.hasUnderline ? underline : null)};
`;

export { TextBase };
