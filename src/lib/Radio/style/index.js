import styled from 'styled-components';
import { math } from 'polished';
import { radioCircleSize, radioSize, ratioSize } from './constants';
import { enabled, disabled } from './base';

const RadioBase = styled.div`
    margin: ${props => props.theme.space.sm} 0;

    input[type='radio'] {
        display: none;

        &:checked {
            & + label {
                &::after {
                    background-color: ${props =>
                        props.theme.color.status.success.main};
                    transform: scale(1);
                }
                font-weight: ${props => props.theme.font.weight.bold};
            }
        }
    }

    label {
        line-height: ${radioSize};
        position: relative;
        padding: 0
            ${props =>
                math(
                    props.theme.form.radioButtonSize[props.fieldSize] + '* 1.5',
                )};
        color: ${props => props.theme.wab.grey60};
        font-size: ${props => props.theme.daButton.font[props.fieldSize]};

        &::before,
        &::after {
            position: absolute;
            content: '';
            border-radius: 50%;
            box-sizing: border-box;
            transition: all ${props => props.theme.transition.xs};
        }

        &::before {
            left: 0;
            top: 0;
            background-color: ${props => props.theme.wab.white00};
            border: solid 2px ${props => props.theme.wab.grey30};
            height: ${radioSize};
            width: ${radioSize};
        }

        &::after {
            height: ${props => radioCircleSize[props.fieldSize]};
            width: ${props => radioCircleSize[props.fieldSize]};
            background-color: ${props => props.theme.wab.grey30};
            top: ${props => ratioSize[props.fieldSize]};
            left: ${props => ratioSize[props.fieldSize]};
            transform: scale(0);
        }
    }

    ${props => (props.radioDisabled ? disabled : enabled)};
`;

export { RadioBase };
