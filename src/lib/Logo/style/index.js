import styled from 'styled-components';
import {
    whiteStyle,
    noBaselineStyle,
    hoverRightStyle,
    hoverTopStyle,
    hoverColorStyle
} from './base';

const LogoBase = styled.span`
    display: flex;
    flex-direction: column;
    transition: all ${props => props.theme.transition.sm};

    svg {
        transition: all ${props => props.theme.transition.sm};
    }

    ${props => props.white ? whiteStyle : null};
    ${props => props.baseline ? null : noBaselineStyle};
    ${props => props.hoverRight ? hoverRightStyle : null};
    ${props => props.hoverTop ? hoverTopStyle : null};
    ${props => props.hoverColor ? hoverColorStyle : null};
`;

export { LogoBase };