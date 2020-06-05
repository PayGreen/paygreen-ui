import { css } from 'styled-components';

const disabled = css`
    input[type='checkbox'] {
        &:disabled {
            & + label {
                cursor: not-allowed;
                color: ${props => props.theme.wab.grey30};
            }
        }

        &:checked {
            & + label {
                &::before {
                    background-color: ${props => props.theme.wab.grey30};
                    border-color: ${props => props.theme.wab.grey30};
                }
            }
        }
    }
`;

const noHover = css`
    label {
        pointer-events: none;
    }
`;

const enabled = css`
    input[type='checkbox'] {
        &:hover,
        &:active,
        &:focus {
            &:not(:checked) {
                & + label {
                    & > .icon {
                        transform: scale(0.8);
                        svg {
                            fill: ${props => props.theme.wab.grey30};
                        }
                    }
                }
            }
        }
    }

    label {
        cursor: pointer;
    }

    ${props => (props.checkboxReadOnly ? noHover : null)};
`;

export { disabled, enabled };
