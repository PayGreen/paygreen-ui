import styled from 'styled-components';
import { math } from 'polished';
import { MessageBase } from '../../Message/style';
import { TextBase } from '../../Text/style';

const HistogramBarBase = styled.div`
    cursor: default;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: ${props => props.theme.histogram.height[props.blockHeight]};
    width: fit-content;
    padding: 0 ${props => math(props.theme.space[props.paddingLateral] + '/2')};
    filter: grayscale(${props => props.isDisabled ? 1 : 0});

    &:hover {
        z-index: ${props => props.theme.zindex.content};

        .bar {
            opacity: 1;
        }

        ${MessageBase} {
            pointer-events: initial;
            opacity: 1;
            bottom: calc(
                ${props => props.heightValue + '% + ' + props.theme.space.sm}
            );
        }

        & > ${TextBase} {
            opacity: 1;
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
        position: absolute;
        bottom: ${props => props.heightValue}%;
        min-width: 9ch;
        opacity: 0;
        transition: all ${props => props.theme.transition.xs};
    }

    & > ${TextBase} {
        position: absolute;
        top: 100%;
        opacity: ${props => (props.isLabelVisible ? 1 : 0)};
        transition: all ${props => props.theme.transition.xs};
    }
`;

export { HistogramBarBase };
