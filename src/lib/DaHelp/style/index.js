import styled from 'styled-components';
import { math } from 'polished';
import { enabled, disabled } from './base';

const DaHelpBase = styled.button`
    box-sizing: border-box;
    padding: 0;
    padding-right: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/10')};
    width: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    height: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    border: none;
    border-radius: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: all ${props => props.theme.transition.xs};

    & > .icon {
        width: ${props => props.theme.iconSize[props.fieldSize]};
        height: auto;
    }

    ${props => (props.disabled ? disabled : enabled)};
`;

export { DaHelpBase };
