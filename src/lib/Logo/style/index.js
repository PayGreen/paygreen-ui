import styled from 'styled-components';
import {
    textSize,
    coloredStyle,
    whiteStyle,
    noBaselineStyle,
    hoverRightStyle,
    hoverTopStyle,
    hoverColorStyle,
} from './base';

const LogoBase = styled.span`
    display: flex;
    align-items: center;
    transition: all ${props => props.theme.transition.sm};

    .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: ${props => props.theme.logoWidth[props.blockWidth]};
        height: ${props => props.theme.logoHeight[props.blockHeight]};
    }

    img,
    svg {
        transition: all ${props => props.theme.transition.sm};
    }

    img {
        max-height: 100%;
        max-width: 100%;
    }

    .text {
        border-radius: ${props => props.theme.radius.sm};
        text-align: center;
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.font.spacing};
        font-weight: ${props => props.theme.font.weight.bold};
        ${props => textSize[props.textSize]};
    }

    ${props => (props.isWhite ? whiteStyle : coloredStyle)};
    ${props => (props.hasBaseline ? null : noBaselineStyle)};
    ${props => (props.hasHoverRight ? hoverRightStyle : null)};
    ${props => (props.hasHoverTop ? hoverTopStyle : null)};
    ${props => (props.hasHoverColor ? hoverColorStyle : null)};
`;

export { LogoBase };
