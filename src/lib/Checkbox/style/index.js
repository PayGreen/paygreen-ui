import styled from 'styled-components';
import { math } from 'polished';
import { enabled, disabled } from './base';

const checkboxSize = props =>
    props.theme.form.checkboxButtonSize[props.fieldSize];

const CheckboxBase = styled.div`
    margin: ${props =>
            math(
                props.theme.form.checkboxButtonSize[props.fieldSize] + '* 0.5',
            )}
        0; // this constant is more adapted than theme.space to keep the balance

    input[type='checkbox'] {
        display: none;

        &:checked {
            & + label {
                &::before {
                    border-color: ${props =>
                        props.theme.color.status.success.main};
                    background-color: ${props =>
                        props.theme.color.status.success.main};
                }
                font-weight: ${props => props.theme.font.weight.bold};

                & > .icon {
                    transform: scale(1);
                    svg {
                        fill: ${props => props.theme.wab.white00};
                    }
                }
            }
        }
    }

    label {
        line-height: ${checkboxSize};
        position: relative;
        padding: 0
            ${props =>
                math(
                    props.theme.form.checkboxButtonSize[props.fieldSize] +
                        '* 1.5',
                )};
        color: ${props => props.theme.wab.grey60};
        font-size: ${props => props.theme.daButton.font[props.fieldSize]};

        &::before,
        & > .icon {
            position: absolute;
            box-sizing: border-box;
            transition: all ${props => props.theme.transition.xs};
            left: 0;
            top: 0;
            height: ${checkboxSize};
            width: ${checkboxSize};
        }

        &::before {
            content: '';
            background-color: ${props => props.theme.wab.white00};
            border: solid 2px ${props => props.theme.wab.grey30};
            border-radius: 20%;
        }

        & > .icon {
            transform: scale(0);
            svg {
                fill: ${props => props.theme.wab.white00};
            }
        }
    }

    ${props => (props.checkboxDisabled ? disabled : enabled)};
`;

export { CheckboxBase };
