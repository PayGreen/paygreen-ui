import { css } from 'styled-components';
import { transparentize } from 'polished';
import { textColor } from './constants';

const withShadow = css`
    textarea {
        box-shadow: 1px 1px 10px ${props => transparentize(0.9, props.theme.color.black00)};
    }
`;

const enabled = css`
    textarea {
        resize: vertical;
        color: ${props => textColor[props.status]};
        background-color: ${props => props.theme.bg};
        border-color: ${props => transparentize(0.4, props.theme.color.state[props.status])};

        &:hover,
        &:active,
        &:focus {
            border-color: ${props => props.theme.color.state[props.status]};
            padding-left: ${props => props.theme.space.md};
            padding-right: ${props => props.theme.space.sm};
        }
    }
`;

const disabled = css`
    textarea {
        resize: none;
        cursor: not-allowed;
        color: ${props => props.theme.color.grey40};
        background-color: ${props => props.theme.color.white20};
        border-color: ${props => props.theme.color.grey20};
    }
`;

export {
    withShadow,
    enabled,
    disabled
};