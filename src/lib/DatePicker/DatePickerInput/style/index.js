import styled from 'styled-components';
import { math } from 'polished';
import { field, enabled, disabled, helpButtonStyle } from './base';

const DatePickerInputBase = styled.div`
    max-width: ${props => math(props.theme.form.inputWidth[props.blockWidth] + '/2')};

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

    ${props => (props.hasHelpButton ? helpButtonStyle : null)};
`;

export default DatePickerInputBase;
