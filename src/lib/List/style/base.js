import { css } from 'styled-components';
import { math } from 'polished';

const dashedWidth = {
    none: 0,
    xs: '50px',
    sm: '70px',
    md: '100px',
    lg: '160px',
    xl: '220px'
};

const dashedStyle = css`
    li {
        &:nth-child(even) {
            & > :nth-child(2) {
                margin-left: ${props => dashedWidth[props.dashed]};
            }
        }
    }

    .dashed {
        display: block;
        width: ${props => dashedWidth[props.dashed]};
        padding: ${props => math(props.theme.iconSize[props.bulletSize] + '/4')};
        margin-left: ${props => math(props.theme.iconSize[props.bulletSize] + '/2')};

        &.bottom {
            transform: scaleX(-1);
        }

        svg {
            fill: ${props => props.theme.color[props.colorTheme].main};
            opacity: .3;
        }
    }
`;

export {
    dashedStyle
};