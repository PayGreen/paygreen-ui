import styled from 'styled-components';
import { formStatusOptions } from '../../../shared/constants';

const textColor = {
    default: props => props.theme.fontDefault,
    success: props => props.theme.color.state.success,
    warning: props => props.theme.fontDefault,
    danger: props => props.theme.color.state.danger
};

const InputBase = styled.div`
    max-width: ${props => props.theme.form.inputWidth.md};

    label {
        display: block;
        color: ${props => props.theme.color.grey30};
        font-size: 1rem;
        font-weight: ${props => props.theme.font.weight.bold};
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.font.spacing};
    }

    input {
        display: block;
        box-sizing: border-box;
        outline: none;
        border: none;
        padding: ${props => props.theme.space.sm};
        padding-left: 0;
        color: ${props => textColor[props.status]};
        background-color: ${props => props.theme.bg};
        width: 100%;
        transition: all ${props => props.theme.transition.sm};

        ::placeholder {
            color: ${props => props.theme.color.grey20};
            font-style: italic;
        }

        &[type="tel"] {
            max-width: ${props => props.theme.form.inputWidth.sm};
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
                background-color: ${props => props.theme.color.state[props.status]};
                opacity: .6;
            }

            &::before {
                left: 0;
                width: 0;
            }

            &::after {
                right: 0;
                width: 100%;               
            }
        }

        &:hover,
        &:active,
        &:focus {
            padding-left: ${props => props.theme.space.sm};
            padding-right: 0;

            & + span {
                &::before,
                &::after {
                    opacity: 1;
                }
            }
        }
    }
`;

export { InputBase };