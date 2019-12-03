import styled  from 'styled-components';
import { line, isClosedStyle, isOpenStyle } from './base';

const MenuHamburgerBase = styled.button`
    box-sizing: border-box;
    width: 29px;
    background-color: transparent;
    margin: ${line * 2}px;
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