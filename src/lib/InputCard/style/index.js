import styled from 'styled-components';
import { transparentize } from 'polished';
import { labelSize, activeStyle } from './base';

const InputCardBase = styled.div`
    ${props => labelSize[props.blockSize]};
    position: relative;

    input {
        position: absolute;
        bottom: 0;
        transform: translateX(-50%);
        left: 50%;

        &:checked {
            & + label {
                ${activeStyle};

                .checked {
                    transform: scale(1);
                    transition-timing-function: cubic-bezier(0.9, -0.6, 0, 2);
                }
            }
        }
    }

    label {
        cursor: pointer;
        position: relative;
        z-index: ${props => props.theme.zindex.content};
        font-weight: ${props => props.theme.font.weight.bold};
        font-size: ${props => props.theme.font.size.xs};
        box-sizing: border-box;
        border-radius: ${props => props.theme.radius.lg};
        color: ${props => props.theme.wab.grey50};
        background-color: ${props => props.theme.wab.white00};
        box-shadow: ${props =>
            props.theme.shadow.size.sm +
            ' ' +
            transparentize(0.9, props.theme.wab.black00)};
        transition: all ${props => props.theme.transition.xs};

        & > .icon {
            opacity: 0.5;

            svg {
                fill: ${props => props.theme.wab.grey40};
            }
        }

        .checked {
            position: absolute;
            top: 0;
            right: 0;
            background-color: ${props =>
                transparentize(0.8, props.theme.status.success.main)};
            width: ${props => props.theme.corner.size.lg};
            height: ${props => props.theme.corner.size.lg};
            border-radius: 0 ${props => props.theme.radius.lg} 0 100%;
            text-align: right;
            padding: ${props => props.theme.corner.padding.lg}
                ${props => props.theme.corner.padding.lg} 0 0;
            box-sizing: border-box;
            transform-origin: top right;
            transform: scale(0);
            transition: all ${props => props.theme.transition.xs};
        }

        &:hover {
            ${activeStyle};
        }
    }
`;

export { InputCardBase };
