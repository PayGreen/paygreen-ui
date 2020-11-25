import { css } from 'styled-components';

const arrowBreakpoint = 'xl';
const arrowSize = props => props.theme.arrow[props.fieldSize];

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
    none: css`
        &::after {
            display: none;
        }
    `,
    topLeft: css`
        ${topLeftStyle};
    `,
    topCenter: css`
        ${topStyle};
        ${centerStyle};
    `,
    topRight: css`
        ${topStyle};
        ${rightStyle};
    `,
    bottomLeft: css`
        ${bottomLeftStyle};
    `,
    bottomCenter: css`
        ${bottomStyle};
        ${centerStyle};
    `,
    bottomRight: css`
        ${bottomStyle};
        ${rightStyle};
    `,
    left: css`
        @media ${props => props.theme.screen.max[arrowBreakpoint]} {
            ${topLeftStyle};
        }

        @media ${props => props.theme.screen.min[arrowBreakpoint]} {
            margin-left: ${arrowSize};

            &::after {
                transform: rotate(90deg);
                left: -${arrowSize};
                top: 50%;
            }
        }
    `,
    right: css`
        @media ${props => props.theme.screen.max[arrowBreakpoint]} {
            ${bottomLeftStyle};
        }

        @media ${props => props.theme.screen.min[arrowBreakpoint]} {
            margin-right: ${arrowSize};

            &::after {
                transform: rotate(-90deg);
                right: -${arrowSize};
                top: 50%;
            }
        }
    `,
};

export { arrowSize, arrowBlockStyle };
