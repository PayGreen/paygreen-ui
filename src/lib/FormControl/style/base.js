import { css } from 'styled-components';

const statusStyle = css`
    select,
    input,
    textarea {
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
        background-color: ${props =>
            props.theme.color.status[props.colorStatus].light};

        &:hover,
        &:active,
        &:focus {
            background-image: none;
            background-color: ${props =>
                props.theme.color.status[props.colorStatus].main};
        }

        & > .icon {
            svg {
                fill: ${props =>
                    props.theme.color.status[props.colorStatus].main};
            }
        }
    }

    input[type='checkbox'] {
        &:checked {
            & + label {
                font-weight: ${props => props.theme.font.weight.bold};

                &::before {
                    border-color: ${props =>
                        props.theme.color.status[props.colorStatus].main};
                    background-color: ${props =>
                        props.theme.color.status[props.colorStatus].main};
                }
            }
        }
    }

    input[type='radio'] {
        &:checked {
            & + label {
                &::after {
                    background-color: ${props =>
                        props.theme.color.status[props.colorStatus].main};
                }
            }
        }
    }
`;

export { statusStyle };
