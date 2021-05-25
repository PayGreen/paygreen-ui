import styled from 'styled-components';
import { activeStyle, borderRadius } from './base';

const DaHelpBase = styled.button`
    box-sizing: border-box;
    width: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    height: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    padding: 0;
    border: none;
    background-color: ${props => props.theme.status.default.light};
    transition: all ${props => props.theme.transition.xs};

    &:hover,
    &:active,
    &:focus {
        ${activeStyle};
    }

    & > .icon {
        width: ${props => props.theme.icon.size[props.fieldSize]};
        height: auto;

        svg {
            fill: ${props => props.theme.status.default.main};
        }
    }

    ${props => (props.isRounded ? borderRadius.rounded : borderRadius.normal)};
    ${props => (props.isActive ? activeStyle : null)};
`;

export { DaHelpBase };
