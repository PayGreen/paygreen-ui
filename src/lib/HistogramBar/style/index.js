import styled from 'styled-components';
import { math } from 'polished';
import { MessageBase } from '../../Message/style';
import { messageStyle } from './base';

const HistogramBarBase = styled.div`
    cursor: default;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    padding: 0 ${props => math(props.theme.space[props.paddingLateral] + '/2')};
    filter: grayscale(${props => props.isDisabled ? 1 : 0});

    &:hover {
        z-index: ${props => props.theme.zindex.content};

        .bar {
            opacity: 1;
        }

        ${MessageBase} {
            opacity: 1;
            pointer-events: initial;
            margin-bottom: ${props => props.theme.space.xs};
        }
    }

    .bar {
        height: ${props => props.heightValue}%;
        min-height: ${props => props.theme.space.xs};
        width: ${props => props.theme.histogram.width[props.blockWidth]};
        background-color: ${props => props.theme.color[props.colorTheme].main};
        border-top-left-radius: ${props => props.theme.radius.sm};
        border-top-right-radius: ${props => props.theme.radius.sm};
        opacity: 0.5;
        transition: all ${props => props.theme.transition.xs};
    }

    ${MessageBase} {
        pointer-events: none;
        z-index: ${props => props.theme.zindex.front};
        display: block;
        position: absolute;
        min-width: 9ch;
        opacity: 0;
        transition: all ${props => props.theme.transition.xs};

        ${props => messageStyle[props.messagePosition]};
    }
`;

export { HistogramBarBase };
