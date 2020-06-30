import styled from 'styled-components';
import { field, enabled, disabled, helpButtonStyle } from './base';

const DaInputBase = styled.div`
    position: relative;
    max-width: ${props =>
        props.type === 'tel'
            ? props.theme.form.inputWidth.sm
            : props.theme.form.inputWidth[props.blockWidth]};

    input {
        ${field};
        line-height: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
        ${props => (props.inputDisabled ? disabled : enabled)};

        ::placeholder {
            color: ${props => props.theme.wab.grey30};
            font-style: italic;
        }
        
        ${props => (props.hasHelpButton ? helpButtonStyle : null)};
    }
`;

export { DaInputBase };
