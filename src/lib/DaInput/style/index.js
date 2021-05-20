import styled from 'styled-components';
import { field, enabled, disabled, helpButtonStyle } from './base';

const DaInputBase = styled.div`
    input {
        ${field};
        line-height: ${props =>
            props.theme.daButton.buttonHeight[props.fieldSize]};
        ${props => (props.inputDisabled ? disabled : enabled)};

        ::placeholder {
            color: ${props => props.theme.wab.grey30};
            font-style: italic;
        }
    }

    ${props => (props.hasStaticWidth ? widthStyle.static : widthStyle.fit)};
    ${props => (props.hasHelpButton ? helpButtonStyle : null)};
`;

export { DaInputBase };
