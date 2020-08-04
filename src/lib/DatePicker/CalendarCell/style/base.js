import { css } from 'styled-components';

const selected = css`
    font-weight: bold;
    color: ${props => props.theme.wab.white00};
    background-color: ${props => props.theme.status[props.colorStatus].main};
`;

const enabled = css`
    cursor: pointer;

    &:hover {
        color: ${props =>
            !props.isSelected
                ? props.theme.status[props.colorStatus].main
                : null}
        background-color: ${props =>
            !props.isSelected
                ? props.theme.status[props.colorStatus].light
                : null};
    }
`;

const disabled = css`
    cursor: default;
    color: ${props => props.theme.wab.grey40};
`;

export { selected, enabled, disabled };
