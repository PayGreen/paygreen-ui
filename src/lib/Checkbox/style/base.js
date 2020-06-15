import { css } from 'styled-components';

const checkboxSize = props =>
    props.theme.form.checkboxSize[props.fieldSize];

const checkSize = 0.8;

const disabledStyle = css`
    label {
        cursor: not-allowed;
        color: ${props => props.theme.wab.grey40};

        &::before {
            border-color: ${props => props.theme.wab.grey20};
            background-color: ${props => props.theme.wab.white20};
        }
    }

    input {
        &:checked {
            & + label {
                &::before {
                    border-color: ${props => props.theme.wab.grey20};
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
                & > .icon {
                    transform: scale(${checkSize * 0.75});
                }
            }
        }

        &:checked {
            &:hover,
            &:active,
            &:focus {
                & + label {
                    & > .icon {
                        transform: scale(${checkSize});
                    }
                }
            }
        }
    }
`;

export { checkboxSize, checkSize, disabledStyle, basicStyle };
