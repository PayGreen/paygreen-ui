import { css } from 'styled-components';

const disabledStyle = css`
    label {
        cursor: not-allowed;
        color: ${props => props.theme.wab.grey40};

        &::before {
            border-color: ${props => props.theme.wab.grey20};
        }
    }

    input {
        &:checked {
            & + label {
                &::after {
                    background-color: ${props => props.theme.wab.grey20};
                }
            }
        }
    }
`;

const basicStyle = css`
    label {
        cursor: pointer;
    }

    input {
        &:hover,
        &:active,
        &:focus {
            & + label {
                &::after {
                    transform: scale(0.7);
                }
            }
        }

        &:checked {
            & + label {
                &::after {
                    transform: scale(1);
                }
            }
        }
    }
`;

export { disabledStyle, basicStyle };
