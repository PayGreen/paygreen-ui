import { css } from 'styled-components';
import { transparentize } from 'polished';
import { disabledField } from '../../Input/style/base';


const canHover = css`
    &:hover,
    &:active,
    &:focus {
        border-color: ${props => props.theme.color.status.default.main};
    }
`;

const enabled = css`
    textarea {
        resize: vertical;
        background-color: ${props => props.theme.wab.white00};
        border-color: ${props => props.theme.wab.grey10};

        ${props => props.inputReadOnly ? null : canHover};
    }
`;

const disabled = css`
    textarea {
        resize: none;
        ${disabledField};
        border-color: ${props => props.theme.wab.grey20};
    }
`;

export {
    enabled,
    disabled
};