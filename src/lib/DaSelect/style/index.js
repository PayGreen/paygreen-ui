import styled from 'styled-components';
import { math } from 'polished';
import {
    field,
    enabled,
    disabled,
    helpButtonStyle,
} from '../../DaInput/style/base';

const DaSelectBase = styled.div`
    position: relative;
    width: ${props => props.theme.form.inputWidth[props.blockWidth]};
    display: flex;
    align-items: center;

    select {
        ${field};
        appearance: none;
        padding-right: ${props =>
            props.theme.daButton.buttonHeight[props.fieldSize]};

        option {
            &:disabled {
                color: ${props => props.theme.wab.grey30};
            }
        }

        ${props => (props.inputDisabled ? disabled : enabled)};
        ${props => (props.hasHelpButton ? helpButtonStyle : null)};
    }

    &::after {
        content: '';
        position: absolute;
        pointer-events: none;
        right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        border-style: solid;
        border-width: 0
            ${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/6',
                )};
        border-top-width: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/5')};
        border-color: transparent;
        border-top-color: ${props =>
            props.inputDisabled
                ? props.theme.wab.grey30
                : props.theme.wab.grey60};
    }
`;

export { DaSelectBase };
