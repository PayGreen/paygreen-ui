import { css } from 'styled-components';
import { math } from 'polished';

const dashedWidth = {
    xs: '50px',
    sm: '70px',
    md: '100px',
    lg: '160px',
    xl: '220px'
};

const dashedLine = {
    xxs: css`
        stroke-width: 2;
        stroke-dasharray: 5, 12;
    `,
    xs: css`
        stroke-width: 2;
        stroke-dasharray: 5, 12;
    `,
    sm: css`
        stroke-width: 2;
        stroke-dasharray: 5, 12;
    `,
    md: css`
        stroke-width: 1.2;
        stroke-dasharray: 4, 8;
    `,
    lg: css`
        stroke-width: 0.9;
        stroke-dasharray: 4, 8;
    `,
    xl: css`
        stroke-width: 0.7;
        stroke-dasharray: 3, 7;
    `
}

const dashedStyle = css`
    li {
        &:nth-child(even) {
            & > :nth-child(2) {
                margin-left: ${props => dashedWidth[props.bulletSize]};
            }
        }
    }

    .dashed {
        display: block;
        width: ${props => dashedWidth[props.bulletSize]};
        padding: ${props => math(props.theme.iconSize[props.bulletSize] + '/4')};
        margin-left: ${props => math(props.theme.iconSize[props.bulletSize] + '/2')};

        &.bottom {
            transform: scaleX(-1);
        }

        svg {
            fill: none;
            opacity: .3;
            stroke: ${props => props.theme.color[props.colorTheme].main};
            stroke-linecap: round;
            stroke-miterlimit: 10;
            ${props => dashedLine[props.bulletSize]}
        }
    }
`;

export {
    dashedStyle
};