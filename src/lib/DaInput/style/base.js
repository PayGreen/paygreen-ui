import { css } from 'styled-components';
import { math } from 'polished';
import {
    fieldTextColor,
} from './constants';

const field = css`
    display: block;
    box-sizing: border-box;
    outline: none;
    border-style: solid;
    border-width:${props => props.theme.line};
    border-color: ${props => props.theme.wab.grey10};
    border-radius: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    padding: 0 ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    height: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    width: 100%;
    font-size: ${props => props.theme.daButton.font[props.fieldSize]};
    transition: all ${props => props.theme.transition.sm};
`;

const disabledField = css`
    cursor: not-allowed;
    color: ${props => props.theme.wab.grey40};
    background-color: ${props => props.theme.wab.white20};
`;

const canHover = css`
    &:hover,
    &:active,
    &:focus {
        border-color: ${props => props.theme.color.status.default.main};
        padding-left: 3em;
        padding-right: 3em;

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
`;

const helpButtonStyle = css`
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

export {
    field,
    disabledField,
    enabled,
    disabled,
    helpButtonStyle,
};