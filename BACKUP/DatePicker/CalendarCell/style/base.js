import { css } from 'styled-components';

const selected = css`
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.theme.wab.white00};
    background-color: ${props => props.theme.status[props.colorStatus].main};
`;

const hover = css`
    &:hover,
    &:active,
    &:focus {
        color: ${props => props.theme.status[props.colorStatus].main};
        background-color: ${props =>
            props.theme.status[props.colorStatus].light};
    }
`;

const disabled = css`
    cursor: not-allowed;
    color: ${props => props.theme.wab.grey30};
`;

export { selected, hover, disabled };
