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

    strong {
        font-weight: ${props => props.theme.font.weight.bold};
    }

    /* TODO: remove this temporary fix for p inside titles */
    p {
        margin: 0;
    }
`;

export { TitleBase };