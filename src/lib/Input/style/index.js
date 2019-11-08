import styled from 'styled-components';
import { inputPadding } from './constants';
import {
    label,
    withShadow,
    enabled,
    disabled
} from './base';

const InputBase = styled.div`
    max-width: ${props => props.type === 'tel' ?
        props.theme.form.inputWidth.sm :
        props.theme.form.inputWidth.md
    };

    label {
        ${label};
    }

    input {
        ${props => props.params.shadow ? withShadow : ''};
        ${props => props.disabled ? disabled : enabled};
        
        display: block;
        box-sizing: border-box;
        outline: none;
        border: none;
        border-radius: ${props => props.theme.radius.sm} ${props => props.theme.radius.sm} 0 0;
        padding: ${props => props.theme.space.sm};
        padding-left: ${inputPadding.base};
        padding-right: ${inputPadding.larger};
        width: 100%;
        transition: all ${props => props.theme.transition.sm};

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