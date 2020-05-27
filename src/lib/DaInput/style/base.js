import { css } from 'styled-components';
import { transparentize } from 'polished';
import {
    fieldTextColor,
    inputPadding,
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
    border: solid ${props => props.theme.line} ${props => props.theme.wab.grey10};
    border-radius: ${props => props.theme.daButton.buttonHeight[props.FieldSize]}
    padding: ${props => props.theme.space.sm};
    padding-left: ${inputPadding.base};
    padding-right: ${inputPadding.larger};
    width: 100%;
    line-height: ${props => props.theme.font.lineHeight.base};
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
            background-color: ${props => props.theme.color.status[props.status].main};
            opacity: .7;
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