import { createGlobalStyle, css } from 'styled-components';

const baseBodyStyle = css`
    position: fixed !important;
    width: 100% !important;
`;

const blockedScroll = {
    allDevices: css`
        ${baseBodyStyle};
        overflow-y: scroll !important;
    `,
    mobile: css`
        @media (${props => props.theme.query.max.lg}) {
            ${baseBodyStyle};
            overflow-y: scroll !important;
        }
    `,
};

const noScroll = {
    allDevices: css`
        ${baseBodyStyle};
    `,
    mobile: css`
        @media (${props => props.theme.query.max.lg}) {
            ${baseBodyStyle};
        }
    `,
};

/**
 * @description It blocks scroll on body without removing the scroll bar and preserves layout
 */
const BlockedScrollStyle = createGlobalStyle`
    body {
        ${props =>
            props.hasScrollOnDesktop
                ? blockedScroll.mobile
                : blockedScroll.allDevices};
    }
`;

/**
 * @description It blocks scroll on body without adding a scroll bar
 */
const NoScrollStyle = createGlobalStyle`
    body {
        ${props =>
            props.hasScrollOnDesktop
                ? noScroll.mobile
                : noScroll.allDevices};
    }
`;

export { BlockedScrollStyle, NoScrollStyle };
