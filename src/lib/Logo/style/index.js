import styled from 'styled-components';
import {
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
    width: ${props => props.theme.logoWidth[props.blockWidth]};
    height: ${props => props.theme.logoHeight[props.blockHeight]};

    .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
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
        padding: ${props => props.theme.space.xs};
        text-transform: uppercase;
        font-size: ${props => props.theme.font.size.tiny};
        font-weight: ${props => props.theme.font.weight.bold};
        letter-spacing: ${props => props.theme.font.spacing};
        margin-left: ${props => props.theme.space.sm};
        text-align: center;
    }

    ${props => (props.isWhite ? whiteStyle : coloredStyle)};
    ${props => (props.hasBaseline ? null : noBaselineStyle)};
    ${props => (props.hasHoverRight ? hoverRightStyle : null)};
    ${props => (props.hasHoverTop ? hoverTopStyle : null)};
    ${props => (props.hasHoverColor ? hoverColorStyle : null)};
`;

export { LogoBase };
