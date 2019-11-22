import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import { smallFontSizes } from './constants';
import {
    titleColors,
    smallText,
    underline
} from './base';

const TitleBase = styled.span`
    ${props => titleColors[props.colorNumber]};
    ${props => smallFontSizes.includes(props.textSize) ? smallText : null};
    ${props => props.underline ? underline : null};
    ${responsiveSpaces('margin')};

    display: block;
    text-align: ${props => props.textAlign};
    font-size: ${props => props.theme.font.size[props.textSize]};
    font-weight: ${props => props.theme.font.weight.bold};
`;

export { TitleBase };