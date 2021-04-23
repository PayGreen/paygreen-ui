import styled from 'styled-components';
import { math } from 'polished';

const HistogramBase = styled.div`
    display: flex;
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};
    padding-top: ${props => props.theme.space.sm};

    .container {
        flex: 1;
        position: relative;
        overflow-y: auto;
        mask-image: linear-gradient(
            to left,
            transparent,
            black ${props => props.theme.space.lg}
        );
    }

    .bars {
        display: flex;
        box-sizing: content-box;
        height: ${props => props.theme.histogram.height[props.blockHeight]};
        width: fit-content;
        padding: 0 ${props => props.theme.space.lg};
        min-width: ${props =>
            math(
                props.theme.histogram.height.xs +
                    ' - 2 * ' +
                    props.theme.space.lg,
            )};
        border-bottom: solid
            ${props => props.theme.line + ' ' + props.theme.wab.grey20};
    }
`;

export { HistogramBase };
