import { css, keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { fieldHeight, fieldRadius } from './constants';

const inputColor = css`
    input {
        color: ${props => props.theme.color.state[props.status]};
    }
`;

const inputHover = css`
    input {
        &:hover,
        &:active,
        &:focus {
            border-bottom-color: ${props => transparentize(0.7, props.theme.color.state[props.status])};
        }
    }
`;

const buttonColor = css`
    button {
        border-color: ${props => transparentize(0.85, props.theme.color.state[props.status])};
        background-color: ${props => transparentize(0.9, props.theme.color.state[props.status])};
        color: ${props => props.theme.color.state[props.status]};
    }
`;

const buttonHover = css`
    button {
        &:hover,
        &:active,
        &:focus {
            color: ${props => props.theme.wab.white00};
            background-color: ${props => props.theme.color.state[props.status]};
        }
    }
`;

const submittedAnimation = keyframes`
    from {
        margin-top: -${fieldHeight};
    }

    to {
        margin-top: 0;
    }
`;

const submittedLabel = css`
    span {
        display: block;
        position: absolute;
        padding-left: ${fieldRadius};
        padding-top: ${props => props.theme.space.xs};
        font-style: italic;
        color: ${props => props.theme.color.state[props.status]};
        animation: ${submittedAnimation} ${props => props.theme.transition.sm} cubic-bezier(0.9, -0.6, 0, 2);
        animation-fill-mode: forwards;
    }
`;

const statusStyles = {
    default: css`
        ${inputHover};
        ${buttonColor};
        ${buttonHover};
    `,
    success: css`
        ${inputColor};
        ${buttonColor};
        ${submittedLabel};
    `,
    warning: css`
        ${inputHover};
        ${buttonColor};
    `,
    danger: css`
        ${inputColor};
        ${inputHover};
        ${buttonColor};
    `,
};

export {
    statusStyles,
}