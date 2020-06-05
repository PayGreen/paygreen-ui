import { css } from 'styled-components';

const enabled = css`
    &:hover,
    &:active,
    &:focus {
        background-color:blue;
    }
    ${props => (props.readOnly ? readOnly : null)};
    ${props => (props.isActive ? isActive : null)};
}
`;

const disabled = css`
    cursor: not-allowed;
    filter: grayscale(1);
`;

const isActive = css`
    background-color:green;
`;

const readOnly = css`
    cursor: not-allowed;
`;

export { enabled, disabled };
