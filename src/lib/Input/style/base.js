import { css } from 'styled-components';
import { transparentize } from 'polished';
import {
    fieldTextColor,
    inputPadding,
    underlineAnimation
} from './constants';

const label = css`
    display: block;
    color: ${props => props.theme.color.grey30};
    font-size: 1rem;
    font-weight: ${props => props.theme.font.weight.bold};
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
`;

const disabledField = css`
    cursor: not-allowed;
    color: ${props => props.theme.color.grey40};
    background-color: ${props => props.theme.color.white20};
`;

const fieldShadow = css`
    box-shadow: 1px 1px 10px ${props => transparentize(0.9, props.theme.color.black00)};
`;

const withShadow = css`
    label {
        margin-bottom: ${props => props.theme.space.xs};
    }
    
    input {
        ${fieldShadow};
    }
`;

const enabled = css`
    color: ${props => fieldTextColor[props.status]};
    background-color: ${props => props.theme.bg};

    & + span {
        &::before,
        &::after {
            background-color: ${props => props.theme.color.state[props.status]};
            opacity: .7;
        }

        &::before {
            transition: width 0.5s ease;
            width: ${props => underlineAnimation.before[props.keyframe]};
        }

        &::after {
            transition: width 0.4s ease, background-color 0s linear 0.9s;
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
`;

const disabled = css`
    ${disabledField};

    & + span {
        &::before,
        &::after {
            background-color: ${props => props.theme.color.grey20};
            width: 100%;
        }
    }
`;

export {
    label,
    disabledField,
    fieldShadow,
    withShadow,
    enabled,
    disabled
};