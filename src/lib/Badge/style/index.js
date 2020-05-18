import styled from 'styled-components';
import { textSize, originalStyle, reverseStyle } from './base';

const BadgeBase = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: ${props => props.theme.radius.sm};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
    font-weight: ${props => props.theme.font.weight.bold};

    ${props => textSize[props.textSize]};
    ${props => (props.colorType === 'original' ? originalStyle : reverseStyle)};
`;

export { BadgeBase };
