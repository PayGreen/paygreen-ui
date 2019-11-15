import styled from 'styled-components';
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

    display: block;
    margin-top: ${props => props.theme.blockPadding[props.marginTop]};
    margin-bottom: ${props => props.theme.font.underline.space[props.textSize]};
    padding-left: ${props => props.theme.space[props.paddingBlock]};
    padding-right: ${props => props.theme.space[props.paddingBlock]};
    text-align: ${props => props.textAlign};
    font-size: ${props => props.theme.font.size[props.textSize]};
    font-weight: ${props => props.theme.font.weight.bold};
`;

export { TitleBase };