import styled from 'styled-components';
import { BadgeBase } from '../../Badge/style';
import {
    noBaselineStyle,
    whiteStyle,
    hoverColorStyle,
    hoverDirectionStyle,
} from './base';

const LogoBase = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ${props => props.theme.transition.sm};

    .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: ${props => props.theme.logoWidth[props.blockWidth]};
        height: ${props => props.theme.logoHeight[props.blockHeight]};
        transition: all ${props => props.theme.transition.sm};
    }

    ${BadgeBase} {
        margin-left: ${props => props.theme.space.sm};
        transition: all ${props => props.theme.transition.sm};
    }

    img,
    svg {
        transition: all ${props => props.theme.transition.sm};
    }

    img {
        max-height: 100%;
        max-width: 100%;
    }

    ${props => (props.hasBaseline ? null : noBaselineStyle)};
    ${props => (props.isWhite ? whiteStyle : null)};
    ${props => (props.hasHoverColor ? hoverColorStyle : null)};
    ${props => hoverDirectionStyle[props.hoverDirection]};

    a:hover &,
    a:active &,
    a:focus & {
        padding-top: 0;
        padding-bottom: ${props => props.theme.space.sm};
        padding-right: 0;
        padding-left: ${props => props.theme.space.sm};
    }
`;

export { LogoBase };
