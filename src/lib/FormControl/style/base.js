import { css } from 'styled-components';
import { DaInputBase } from '../../DaInput/style';
import { DaHelpBase } from '../../DaHelp/style';
import { DaLabelBase } from '../../DaLabel/style';
import { DaSelectBase } from '../../DaSelect/style';
import { DaTextareaBase } from '../../DaTextarea/style';
import { CheckboxGroupBase } from '../../CheckboxGroup/style';
import { CheckboxBase } from '../../Checkbox/style';
import { MessageBase } from '../../Message/style';
import { RadioGroupBase } from '../../RadioGroup/style';
import { RadioBase } from '../../Radio/style';

const statusStyle = css`
    ${DaSelectBase} select,
    ${DaInputBase} input,
    ${DaTextareaBase} textarea {
        border-color: ${props => props.theme.status[props.colorStatus].main};

        &:hover,
        &:active,
        &:focus {
            border-color: ${props =>
                props.theme.status[props.colorStatus].main};
        }
    }

    ${DaLabelBase} {
        color: ${props => props.theme.status[props.colorStatus].main};

        .required {
            color: ${props => props.theme.status[props.colorStatus].main};
        }
    }

    ${DaHelpBase} {
        background-color: ${props =>
            props.theme.status[props.colorStatus].light};

        &:hover,
        &:active,
        &:focus {
            background-image: none;
            background-color: ${props =>
                props.theme.status[props.colorStatus].main};
        }

        & > .icon {
            svg {
                fill: ${props => props.theme.status[props.colorStatus].main};
            }
        }
    }

    ${RadioBase} {
        input {
            &:checked {
                & + label {
                    &::after {
                        background-color: ${props =>
                            props.theme.status[props.colorStatus].main};
                    }
                }
            }
        }
    }

    ${CheckboxBase} {
        input {
            &:checked {
                & + label {
                    &::before {
                        border-color: ${props =>
                            props.theme.status[props.colorStatus].main};
                        background-color: ${props =>
                            props.theme.status[props.colorStatus].main};
                    }
                }
            }
        }
    }
`;

const gridStyle = css`
    display: grid;
    grid-template-areas: 'label label' 'field help' 'message message';
    grid-template-columns: ${props =>
        props.hasStaticWidth ? '1fr auto' : 'auto 1fr'};

    ${DaLabelBase} {
        grid-area: label;
    }

    ${DaInputBase},
    ${DaSelectBase},
    ${DaTextareaBase},
    ${CheckboxGroupBase},
    ${RadioGroupBase} {
        grid-area: field;
    }

    ${DaHelpBase} {
        grid-area: help;
    }

    ${MessageBase} {
        grid-area: message;
    }
`;

export { gridStyle, statusStyle };
