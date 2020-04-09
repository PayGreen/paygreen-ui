import styled from 'styled-components';
import { dotsDelay, dotsTransitions, activeStyle } from './base';

const AnimPlaneBase = styled.div`
    display: flex;
    justify-content: center;
    
    svg {
        width: 100%;
        max-width: ${props => props.theme.imageSize.sm};
        fill: ${props => props.theme.color[props.colorTheme].main};

        .plane {
            transform-origin: center;
            animation-fill-mode: forwards;
            animation-delay: ${props => props.dotsCount * dotsDelay}s;
            animation-duration: 2s;
            animation-timing-function: linear;

            .normal {
                opacity: 0.4;
            }

            .light {
                opacity: 0.2;
            }
        }

        .dots {
            opacity: 0.4;

            path {
                opacity: ${props => props.isActive ? 0 : 1};
                transition: all 0;
                ${props => dotsTransitions(props.dotsCount)};
            }
        }
    }

    ${props => props.isActive ? activeStyle : null};
`;

export { AnimPlaneBase };
