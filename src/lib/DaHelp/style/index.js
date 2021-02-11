import styled from 'styled-components';
import { enabled, disabled, borderRadius } from './base';

const DaHelpBase = styled.button`
    box-sizing: border-box;
    width: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    height: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    padding: 0;
    border: none;
    ${props => props.isRounded ? borderRadius.rounded : borderRadius.normal};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: all ${props => props.theme.transition.xs};

    & > .icon {
        width: ${props => props.theme.icon.size[props.fieldSize]};
        height: auto;
    }

    ${props => (props.disabled ? disabled : enabled)};
`;

export { DaHelpBase };
