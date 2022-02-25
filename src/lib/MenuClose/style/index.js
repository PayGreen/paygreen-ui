import styled from 'styled-components';
import { position } from './base';

const MenuCloseBase = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => position[props.position]};

    .icon {
        position: absolute;
    }

    .background {
        fill: ${props => props.theme.color[props.colorTheme].light};
        transition: all ${props => props.theme.transition.sm};
    }

    &:hover,
    &:active,
    &:focus {
        .icon {
            svg {
                fill: ${props => props.theme.wab.white00};
            }
        }

        .background {
            fill: ${props => props.theme.color[props.colorTheme].main};
        }
    }
`;

export { MenuCloseBase };