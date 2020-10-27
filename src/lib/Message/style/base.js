import { css } from 'styled-components';

const arrowBreakpoint = 'xl';
const arrowSize = props => props.theme.arrow[props.fieldSize];

const arrowBase = css`
    &::after {
        content: '';
        position: absolute;
        border: solid ${arrowSize} transparent;
        border-top-color: ${props =>
            props.theme.status[props.colorStatus].light};
        transform-origin: top;
    }
`;

const centerStyle = css`
    &::after {
        left: 50%;
        margin-left: -${arrowSize};
    }
`;

const rightStyle = css`
    &::after {
        right: ${arrowSize};
    }
`;

const topStyle = css`
    margin-top: ${arrowSize};

    &::after {
        transform: rotate(180deg);
        top: 0;
    }
`;

const bottomStyle = css`
    margin-bottom: ${arrowSize};

    &::after {
        top: 100%;
    }
`;

const topLeftStyle = css`
    ${topStyle};

    &::after {
        left: ${arrowSize};
    }
`;

const bottomLeftStyle = css`
    ${bottomStyle};

    &::after {
        left: ${arrowSize};
    }
`;

const arrowBlockStyle = {
    none: css``,
    topLeft: css`
        ${arrowBase};
        ${topLeftStyle};
    `,
    topCenter: css`
        ${arrowBase};
        ${topStyle};
        ${centerStyle};
    `,
    topRight: css`
        ${arrowBase};
        ${topStyle};
        ${rightStyle};
    `,
    bottomLeft: css`
        ${arrowBase};
        ${bottomLeftStyle};
    `,
    bottomCenter: css`
        ${arrowBase};
        ${bottomStyle};
        ${centerStyle};
    `,
    bottomRight: css`
        ${arrowBase};
        ${bottomStyle};
        ${rightStyle};
    `,
    left: css`
        ${arrowBase};

        @media (${props => props.theme.query.max[arrowBreakpoint]}) {
            ${topLeftStyle};
        }

        @media (${props => props.theme.query.min[arrowBreakpoint]}) {
            margin-left: ${arrowSize};

            &::after {
                transform: rotate(90deg);
                left: -${arrowSize};
                top: 50%;
            }
        }
    `,
    right: css`
        ${arrowBase};

        @media (${props => props.theme.query.max[arrowBreakpoint]}) {
            ${bottomLeftStyle};
        }

        @media (${props => props.theme.query.min[arrowBreakpoint]}) {
            margin-right: ${arrowSize};

            &::after {
                transform: rotate(-90deg);
                right: -${arrowSize};
                top: 50%;
            }
        }
    `,
};

export { arrowBlockStyle, arrowSize };
