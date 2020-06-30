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

    button {
        background-color: ${props => props.theme.color.status[props.colorStatus].light};
    
        &:hover,
        &:active,
        &:focus {
            background-image: none;
            background-color: ${props => props.theme.color.status[props.colorStatus].main};
        }
    
        & > .icon {
            svg {
                fill: ${props => props.theme.color.status[props.colorStatus].main};
            }
        }
    }
`;

const messageStyle = css`
    ${MessageBase} {
        display: grid;
    }
`;


export { messageStyle, statusStyle };
