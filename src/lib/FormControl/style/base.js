import { css } from 'styled-components';
import { MessageBase } from '../../Message/style';

const statusStyle = css`
    select,
    input {
        border-color: ${props =>
            props.theme.color.status[props.colorStatus].main};
        &:hover,
        &:active,
        &:focus {
            border-color: ${props =>
                props.theme.color.status[props.colorStatus].main};
        }
    }

    & > label,
    legend {
        color: ${props => props.theme.color.status[props.colorStatus].main};
    }

    ${MessageBase} {
        display: grid;
    }
`;

export { statusStyle };
