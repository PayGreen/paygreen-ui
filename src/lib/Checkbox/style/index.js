import styled from 'styled-components';
import { math } from 'polished';
import { enabled, disabled } from './base';

const checkboxSize = props =>
    props.theme.form.checkboxButtonSize[props.fieldSize];

const CheckboxBase = styled.div`
    margin: ${props => props.theme.space.sm} 0;

    input[type='checkbox'] {
        display: none;

        &:checked {
            & + label {
                &::after {
                    color: ${props => props.theme.wab.white00};
                    transform: scale(1);
                }

                &::before {
                    border-color: ${props =>
                        props.theme.color.status.success.main};
                    background-color: ${props =>
                        props.theme.color.status.success.main};
                }
                font-weight: ${props => props.theme.font.weight.bold};
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
        &::after {
            position: absolute;
            box-sizing: border-box;
            transition: all ${props => props.theme.transition.xs};
        }

        &::before {
            left: 0;
            top: 0;
            content: '';
            background-color: ${props => props.theme.wab.white00};
            border: solid 2px ${props => props.theme.wab.grey30};
            height: ${checkboxSize};
            width: ${checkboxSize};
            border-radius: 20%;
        }

        &::after {
            content: 'V';
            height: ${checkboxSize};
            width: ${checkboxSize};
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${props => props.theme.wab.white00};
            left: 0;
            top: 0;
            transform: scale(0);
        }
    }

    ${props => (props.checkboxDisabled ? disabled : enabled)};
`;

export { CheckboxBase };
