import styled from 'styled-components';
import { transparentize } from 'polished';
import { hiddenStyle, fixedStyle } from './base';

const MenuTertiaryBase = styled.div`
    position: relative;
    z-index: ${props => props.theme.zindex.subHeader};
    display: flex;
    justify-content: center;
    height: ${props => props.theme.grid.header};
    white-space: nowrap;
    font-size: ${props => props.theme.font.size.xs};
    background-color: ${props => props.theme.wab.white20};
    border-bottom: solid ${props => props.theme.line + props.theme.wab.grey10};
    box-shadow: ${props =>
        props.theme.shadow.size.lg +
        ' ' +
        transparentize(props.theme.shadow.opacity.sm, props.theme.wab.black00)};
    transition: all ${props => props.theme.transition.sm};

    ${props => (props.isHidden ? hiddenStyle : null)};
    ${props => (props.isFixed ? fixedStyle : null)};

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: ${props => props.theme.space.md};
        z-index: ${props => props.theme.zindex.front};
        pointer-events: none;
    }

    &::before {
        left: 0;
        background-image: linear-gradient(
            to right,
            ${props => props.theme.wab.white20},
            transparent
        );
    }

    &::after {
        right: 0;
        background-image: linear-gradient(
            to left,
            ${props => props.theme.wab.white20},
            transparent
        );
    }

    .indiana-scroll-container {
        height: 100%;
        display: flex;
    }

    a {
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 ${props => props.theme.space.md};
        font-weight: ${props => props.theme.font.weight.bold};
        color: ${props => props.theme.wab.grey40};
        transition: all ${props => props.theme.transition.xs};

        &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: ${props => props.theme.line};
            background-color: ${props =>
                props.theme.color[props.colorTheme].main};
            transform: translateX(-50%);
            transition: all ${props => props.theme.transition.xs};
        }

        &:hover,
        &:active,
        &:focus,
        &.active {
            color: ${props => props.theme.color[props.colorTheme].main};

            &::after {
                width: 100%;
            }
        }
    }
`;

export { MenuTertiaryBase };
