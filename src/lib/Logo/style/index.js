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
    justify-content: center;
    align-items: center;
    transition: all ${props => props.theme.transition.sm};
    width: ${props => props.theme.logoWidth[props.logoWidth]};
    height: ${props => props.theme.logoHeight[props.logoHeight]};

    img,
    svg {
        transition: all ${props => props.theme.transition.sm};
    }

    img {
        max-height: 100%;
        max-width: 100%;
    }

    ${props => props.white ? whiteStyle : null};
    ${props => props.baseline ? null : noBaselineStyle};
    ${props => props.hoverRight ? hoverRightStyle : null};
    ${props => props.hoverTop ? hoverTopStyle : null};
    ${props => props.hoverColor ? hoverColorStyle : null};
`;

export { LogoBase };