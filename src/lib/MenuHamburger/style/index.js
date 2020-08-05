import styled from 'styled-components';
import { math } from 'polished';
import { line, sideStyle, isClosedStyle, isOpenStyle } from './base';
import { mainColor } from '../../Text/style/constants';

const MenuHamburgerBase = styled.button`
    display: block;
    box-sizing: border-box;
    width: ${props => math(props.theme.icon.size.lg + '-' + line)};
    height: ${props => math(props.theme.icon.size.lg + '-' + line)};
    background-color: transparent;
    border: none;
    padding: 0;
    outline: none;
    cursor: pointer;

    span {
        display: block;
        height: ${line}px;
        border-radius: ${props => props.theme.radius.sm};
        background-color: ${props => mainColor[props.colorPallet]};
        transition: all ${props => props.theme.transition.sm};
        ${props => sideStyle[props.arrowDirection]};

        &:nth-of-type(2) {
            margin-top: ${line * 2}px;
            margin-bottom: ${line * 2}px;
        }
    }

    ${props => (props.isOpen ? isOpenStyle : isClosedStyle)};
`;

export { MenuHamburgerBase };
