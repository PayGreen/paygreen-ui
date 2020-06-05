import { css } from 'styled-components';

const disabled = css`
    input[type='radio'] {
        &:disabled {
            & + label {
                cursor: not-allowed;
                color: ${props => props.theme.wab.grey30};
            }
        }

        &:checked {
            & + label {
                &::after {
                    background-color: ${props => props.theme.wab.grey30};
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
    input[type='radio'] {
        &:hover,
        &:active,
        &:focus {
            &:not(:checked) {
                & + label {
                    &::after {
                        background-color: ${props => props.theme.wab.grey30};
                        transform: scale(0.7);
                    }
                }
            }
        }
    }

    label {
        cursor: pointer;
    }

    ${props => (props.radioReadOnly ? noHover : null)};
`;

export { disabled, enabled };
