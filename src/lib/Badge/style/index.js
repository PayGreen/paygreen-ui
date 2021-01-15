import styled from 'styled-components';
import { math } from 'polished';
import {
    colorTypeOptions,
    iconHtmlTagOptions,
} from '../../../shared/constants';
import { buttonStyle, badgeSize, originalStyle, reverseStyle } from './base';

const BadgeBase = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: ${props => props.theme.radius.sm};
    height: ${props => math(props.theme.font.size[props.textSize] + ' + 1rem')};
    font-size: ${props => props.theme.font.size[props.textSize]};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
    font-weight: ${props => props.theme.font.weight.bold};

    ${props =>
        props.htmlTag === iconHtmlTagOptions.button ? buttonStyle : null};
    ${props => badgeSize[props.textSize]};
    ${props =>
        props.colorType === colorTypeOptions.original
            ? originalStyle[props.colorStyle]
            : reverseStyle};
`;

export { BadgeBase };
