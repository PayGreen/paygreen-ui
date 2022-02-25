import styled from 'styled-components';
import { math } from 'polished';
import { radioCircleSize, radioSize, ratioSize } from './constants';
import { basicStyle, disabledStyle } from './base';

const RadioBase = styled.div`
    position: relative;
    margin: ${props => props.theme.space.sm} 0;
    display: flex; /* avoid 100% large label (for hover) */

    label {
        position: relative;
        display: flex;
        line-height: ${radioSize};
        font-size: ${props => props.theme.daButton.font[props.fieldSize]};
        color: ${props => props.theme.wab.grey60};
        transition: all ${props => props.theme.transition.xs};

        &::before,
        &::after {
            content: '';
            box-sizing: border-box;
            flex-shrink: 0;
            transition: all ${props => props.theme.transition.xs};
        }

        &::before {
            height: ${radioSize};
            width: ${radioSize};
            margin-right: ${props => props.theme.space.sm};
            border-radius: 50%;
            border: solid ${props => props.theme.line};
            border-color: ${props => props.theme.wab.grey30};
            background-color: ${props => props.theme.wab.white00};
        }

        &::after {
            position: absolute;
            height: ${radioCircleSize};
            width: ${radioCircleSize};
            background-color: ${props => props.theme.wab.grey30};
            top: ${ratioSize};
            left: ${ratioSize};
            transform: scale(0);
            transform-origin: center;
            border-radius: 50%;
        }
    }

    input {
        position: absolute;
        transform: translate(-50%, -100%);
        top: ${radioSize};
        left: ${props => math(radioSize(props) + '/2')};
        margin-top: -${props => props.theme.line};

        &:checked {
            & + label {
                font-weight: ${props => props.theme.font.weight.bold};
                
                &::after {
                    background-color: ${props =>
                        props.theme.status.success.main};
                    transform: scale(1);
                }
            }
        }
    }

    ${props => (props.isDisabled ? disabledStyle : basicStyle)};
`;

export { RadioBase };
