import styled  from 'styled-components';
import { math } from 'polished';
import { line, isClosedStyle, isOpenStyle } from './base';

const MenuHamburgerBase = styled.button`
    box-sizing: border-box;
    width: ${props => math(props.theme.iconSize.lg + '-' + line)};
    height: ${props => math(props.theme.iconSize.lg + '-' + line)};
    background-color: transparent;
    border: none;
    padding: 0;
    outline: none;
    cursor: pointer;

    span {
        display: block;
        height: ${line}px;
        border-radius: ${props => props.theme.radius.sm};
        margin: ${line * 2}px 0;
        background-color: ${props => props.theme.color[props.colorTheme]['main']};
        transform-origin: center right;
        transition: all ${props => props.theme.transition.sm};

        &:first-of-type,
        &:last-of-type {
            margin: 0;
        }
    }

    ${props => props.isOpen ? isOpenStyle : isClosedStyle};
`;

export { MenuHamburgerBase };