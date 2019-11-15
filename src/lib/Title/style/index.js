import styled from 'styled-components';
import { smallFontSizes } from './constants';
import {
    titleColors,
    smallText,
    underline,
    padding,
    margin
} from './base';

const TitleBase = styled.span`
    ${props => titleColors[props.colorNumber]};
    ${props => smallFontSizes.includes(props.textSize) ? smallText : null};
    ${props => props.underline ? underline : null};
    ${props => props.theme.blockPadding[props.paddingBlock] ? padding : null};
    ${props => props.theme.blockPadding[props.marginTop] ? margin : null};

    display: block;
    text-align: ${props => props.textAlign};
    font-size: ${props => props.theme.font.size[props.textSize]};
    font-weight: ${props => props.theme.font.weight.bold};
`;

export { TitleBase };