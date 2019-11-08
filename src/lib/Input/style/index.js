import styled from 'styled-components';
import {
    label,
    field,
    withShadow,
    enabled,
    disabled
} from './base';

const InputBase = styled.div`
    max-width: ${props => props.inputType === 'tel' ?
        props.theme.form.inputWidth.sm :
        props.theme.form.inputWidth.md
    };

    ${props => props.params.shadow ? withShadow : null};

    label {
        ${label};
    }

    input {
        ${field};
        ${props => props.inputDisabled ? disabled : enabled};

        ::placeholder {
            color: ${props => props.theme.color.grey20};
            font-style: italic;
        }
    }
`;

export { InputBase };