import { css } from 'styled-components';
import { transparentize } from 'polished';

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
    input {
        ${fieldShadow};
    }

    label {
        margin-bottom: ${props => props.theme.space.xs};
    }
`;

export {
    label,
    disabledField,
    fieldShadow,
    withShadow
};