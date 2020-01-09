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
    width: ${props => props.theme.logoWidth[props.blockWidth]};
    height: ${props => props.theme.logoHeight[props.blockHeight]};

    img,
    svg {
        transition: all ${props => props.theme.transition.sm};
    }

    img {
        max-height: 100%;
        max-width: 100%;
    }

    ${props => props.isWhite ? whiteStyle : null};
    ${props => props.hasBaseline ? null : noBaselineStyle};
    ${props => props.hasHoverRight ? hoverRightStyle : null};
    ${props => props.hasHoverTop ? hoverTopStyle : null};
    ${props => props.hasHoverColor ? hoverColorStyle : null};
`;

export { LogoBase };