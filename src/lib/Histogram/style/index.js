import styled from 'styled-components';
import { math } from 'polished';

const HistogramBase = styled.div`
    display: flex;
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};
    padding: ${props => props.theme.space.sm} 0;

    .container {
        flex: 1;
        max-width: ${props => props.theme.blockWidth[props.blockWidth]};
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
        height: ${props =>
            math(
                props.theme.histogram.height[props.blockHeight] +
                    ' + ' +
                    props.theme.line,
            )};
        width: fit-content;
        min-width: ${props =>
            math(
                props.theme.histogram.height.xs +
                    ' - 2 * ' +
                    props.theme.space.lg,
            )};
        padding: 0 ${props => props.theme.space.lg};
        border-bottom: solid
            ${props => props.theme.line + ' ' + props.theme.wab.grey20};
    }
`;

export { HistogramBase };
