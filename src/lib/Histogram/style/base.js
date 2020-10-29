import { css } from 'styled-components';

const yaxisStyle = css`
    margin-left: ${props => props.theme.space.lg};

    .yaxis {
        position: absolute;
        height: ${props => props.theme.histogram.height[props.blockHeight]};
        width: ${props => props.theme.space.lg};
        right: 100%;
    }
`;

export { yaxisStyle };
