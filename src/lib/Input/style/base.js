import { css } from 'styled-components';
import { transparentize } from 'polished';
import {
    fieldTextColor,
    inputPadding,
    underlineAnimation
} from './constants';

const label = css`
    display: block;
    color: ${props => props.theme.wab.grey40};
    font-size: ${props => props.theme.font.size.tiny};
    font-weight: ${props => props.theme.font.weight.bold};
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
`;

const field = css`
    display: block;
    box-sizing: border-box;
    outline: none;
    border: none;
    border-radius: ${props => props.theme.radius.sm} ${props => props.theme.radius.sm} 0 0;
    padding: ${props => props.theme.space.sm};
    padding-left: ${inputPadding.base};
    padding-right: ${inputPadding.larger};
    width: 100%;
    line-height: 1;
    transition: all ${props => props.theme.transition.sm};

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
`;

const disabledField = css`
    cursor: not-allowed;
    color: ${props => props.theme.wab.grey40};
    background-color: ${props => props.theme.wab.white20};
`;

const fieldShadow = css`
    box-shadow: ${props => props.theme.shadow.size.sm + ' ' + transparentize(
        props.theme.shadow.opacity.sm,
        props.theme.wab.black00
    )};
`;

const withShadow = css`
    label {
        margin-bottom: ${props => props.theme.space.xs};
    }
    
    input,
    select {
        ${fieldShadow};
    }
`;

const canHover = css`
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

const enabled = css`
    color: ${props => fieldTextColor[props.status]};
    background-color: ${props => props.theme.wab.white00};

    & + span {
        &::before,
        &::after {
            background-color: ${props => props.theme.color.status[props.status]};
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

    ${props => props.inputReadOnly ? null : canHover};
`;

const disabled = css`
    ${disabledField};

    & + span {
        &::before,
        &::after {
            background-color: ${props => props.theme.wab.grey20};
            width: 100%;
        }
    }
`;

export {
    label,
    field,
    disabledField,
    fieldShadow,
    withShadow,
    enabled,
    disabled
};