import styled from 'styled-components';
import {
    textColor,
    inputPadding,
    underlineAnimation
} from './constants';
import { withShadow } from './base';

const InputBase = styled.div`
    max-width: ${props => props.type === 'tel' ?
        props.theme.form.inputWidth.sm :
        props.theme.form.inputWidth.md
    };

    ${props => props.params.shadow ? withShadow : ''};

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
        border-radius: ${props => props.theme.radius.sm} ${props => props.theme.radius.sm} 0 0;
        padding: ${props => props.theme.space.sm};
        padding-left: ${inputPadding.base};
        padding-right: ${inputPadding.larger};
        color: ${props => textColor[props.status]};
        background-color: ${props => props.theme.bg};
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
                background-color: ${props => props.theme.color.state[props.status]};
                opacity: .7;
            }

            &::before {
                transition: width 0.5s ease;
                left: 0;
                width: ${props => underlineAnimation.before[props.keyframe]};
            }

            &::after {
                transition: width 0.4s ease, background-color 0s linear 0.9s;
                right: 0;
                width: ${props => underlineAnimation.after[props.keyframe]};
            }
        }

        &:hover,
        &:active,
        &:focus {
            padding-left: ${inputPadding.larger};
            padding-right: ${inputPadding.base};

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