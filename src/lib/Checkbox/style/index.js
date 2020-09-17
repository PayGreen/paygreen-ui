import styled from 'styled-components';
import { math } from 'polished';
import { checkboxSize, checkSize, disabledStyle, basicStyle } from './base';

const CheckboxBase = styled.div`
    position: relative;
    display: flex; /* avoid 100% large label (for hover) */
    margin: ${props => props.theme.space.sm} 0;

    label {
        position: relative;
        display: flex;
        line-height: ${checkboxSize};
        font-size: ${props => props.theme.daButton.font[props.fieldSize]};
        color: ${props => props.theme.wab.grey60};
        transition: all ${props => props.theme.transition.xs};

        &::before {
            content: '';
            flex-shrink: 0;
            height: ${checkboxSize};
            width: ${checkboxSize};
            margin-right: ${props => props.theme.space.sm};
            border-radius: ${props => props.theme.radius.sm};
            border: solid ${props => props.theme.line};
            border-color: ${props => props.theme.wab.grey30};
            background-color: ${props => props.theme.wab.white00};
            transition: all ${props => props.theme.transition.xs};
        }

        & > .icon {
            position: absolute;
            left: 0;
            top: 0;
            height: ${checkboxSize};
            width: ${checkboxSize};
            transform: scale(0);

            svg {
                fill: ${props => props.theme.wab.grey30};
            }
        }
    }

    input {
        outline: none;
        position: absolute;
        transform: translate(-50%, -100%);
        top: ${checkboxSize};
        left: ${props => math(checkboxSize(props) + '/2')};
        box-shadow: none;

        &:checked {
            & + label {
                font-weight: ${props => props.theme.font.weight.bold};

                &::before {
                    border-color: ${props =>
                        props.theme.status.success.main};
                    background-color: ${props =>
                        props.theme.status.success.main};
                }

                & > .icon {
                    transform: scale(${checkSize});

                    svg {
                        fill: ${props => props.theme.wab.white00};
                    }
                }
            }
        }
    }

    ${props => (props.isDisabled ? disabledStyle : basicStyle)};
`;

export { CheckboxBase };
