import styled from 'styled-components';
import { textHtmlTagOptions } from '../../../shared/constants';
import { responsiveSpaces } from '../../../shared/spaces';
import { underline } from '../../Title/style/base';
import {
    blockBackground,
    textStyle,
    internalParagraph
} from './base';

const TextBase = styled.p`
    ${responsiveSpaces('padding')};
    ${responsiveSpaces('margin')};
    ${props => blockBackground[props.colorType]};
    border-radius: ${props => props.theme.radius[props.radiusSize]};
    ${props => props.textHtmlTag === textHtmlTagOptions.div ? internalParagraph : textStyle};
    ${props => props.underline ? underline : null};
`;

export { TextBase };