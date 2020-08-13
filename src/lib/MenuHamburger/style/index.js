import styled from 'styled-components';
import { math } from 'polished';
import { line, sideStyle, isClosedStyle, isOpenStyle } from './base';
import { mainColor } from '../../Text/style/constants';

const MenuHamburgerBase = styled.button`
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    width: ${props => math(props.theme.icon.size.lg + '-' + line)};
    height: ${props => math(props.theme.icon.size.lg + '-' + line)};
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-right: ${props => props.theme.space[props.marginRight]};
    margin-left: ${props => props.theme.space[props.marginLeft]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};

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
