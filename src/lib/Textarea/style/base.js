import { css } from 'styled-components';
import { transparentize } from 'polished';
import { fieldTextColor } from '../../Input/style/constants';
import { disabledField, fieldShadow } from '../../Input/style/base';

const withShadow = css`
    textarea {
        ${fieldShadow};
    }
`;

const canHover = css`
    &:hover,
    &:active,
    &:focus {
        border-color: ${props => props.theme.color.state[props.status]};
        padding-left: ${props => props.theme.space.md};
        padding-right: ${props => props.theme.space.sm};
    }
`;

const enabled = css`
    textarea {
        resize: vertical;
        color: ${props => fieldTextColor[props.status]};
        background-color: ${props => props.theme.wab.white00};
        border-color: ${props => transparentize(0.3, props.theme.color.state[props.status])};

        ${props => props.inputReadOnly ? null : canHover};
    }
`;

const disabled = css`
    textarea {
        ${disabledField};
        resize: none;
        border-color: ${props => props.theme.wab.grey20};
    }
`;

export {
    withShadow,
    enabled,
    disabled
};