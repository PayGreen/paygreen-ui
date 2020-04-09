import styled from 'styled-components';
import { borderSize, circleStyle, activeStyle, hiddenStyle } from './base';

const LoaderBase = styled.div`
    position: relative;
    z-index: ${props => props.theme.zindex.loader};
    display: flex;
    justify-content: center;
    transition: all ${props => props.theme.transition.sm};

    ${props => (props.isActive ? activeStyle : hiddenStyle)};

    span {
        position: relative;
        transition: all ${props => props.theme.transition.sm};
        ${circleStyle};
        border-top-color: ${props =>
            props.theme.color[props.colorTheme].gradientShade};
        animation-duration: 2s;

        &::before,
        &::after {
            content: '';
            position: absolute;
            ${circleStyle};
        }

        &::before {
            border-top-color: ${props =>
                props.theme.color[props.colorTheme].main};
            animation-duration: 3s;
            top: ${borderSize}px;
            bottom: ${borderSize}px;
            left: ${borderSize}px;
            right: ${borderSize}px;
        }

        &::after {
            border-top-color: ${props =>
                props.theme.color[props.colorTheme].gradientBase};
            animation-duration: 1.5s;
            top: ${borderSize * 3}px;
            bottom: ${borderSize * 3}px;
            left: ${borderSize * 3}px;
            right: ${borderSize * 3}px;
        }
    }
`;

export { LoaderBase };
