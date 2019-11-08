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

        & + span {
            position: relative;
            display: block;
            height: ${props => props.theme.line};

            &::before,
            &::after {
                content: '';
                position: absolute;
                top: 0;
                height: 100%;
            }

            &::before {
                left: 0;
            }

            &::after {
                right: 0;
            }
        }
    }
`;

export { InputBase };