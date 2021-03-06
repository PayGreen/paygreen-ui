import styled from 'styled-components';
import { transparentize } from 'polished';

const MenuListBase = styled.ul`
    box-sizing: border-box;
    margin: 0;
    padding: ${props => props.theme.space.sm} 0;

    @media ${props => props.theme.screen.min.lg} {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: ${props => props.theme.icon.size.lg};
        padding: ${props => props.theme.radius.lg} 0;
        width: ${props => props.theme.blockWidth.sm};
        background-color: ${props => props.theme.wab.white00};
        border-radius: ${props => props.theme.radius.lg};
        box-shadow: 0 0 35px ${props => transparentize(
            props.theme.shadow.opacity.lg,
            props.theme.color[props.colorTheme].main
        )};

        &::before {
            content: '';
            position: absolute;
            top: -${props => props.theme.icon.size.md};
            left: 50%;
            transform: translateX(-50%);
            border-right: solid ${props => props.theme.icon.size.md} transparent;
            border-bottom: solid ${props => props.theme.icon.size.md} ${props => props.theme.wab.white00};
            border-left: solid ${props => props.theme.icon.size.md} transparent;
        }

        &::after {
            content: '';
            position: absolute;
            top: -${props => props.theme.icon.size.lg};
            left: 0;
            height: ${props => props.theme.icon.size.lg};
            width: 100%;
        }
    }

    li {
        list-style-type: none;
        margin: ${props => props.theme.line} 0;
        padding: 0;
    }
`;

export { MenuListBase };