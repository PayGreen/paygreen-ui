import { css } from 'styled-components';

const activeStyle = css`
    transition-delay: 0s;
`;

const hiddenStyle = css`
    opacity: 0;
    transform: scale(0);
    transition-delay: 0s, ${props => props.theme.transition.xs};
`;

const horizontalAlign = {
    left: css`
        left: 0;
    `,
    center: css`
        left: 50%;
        transform: translateX(-50%);
    `,
    right: css`
        right: 0;
    `,
};

const verticalAlign = {
    top: css`
        bottom: 100%;
        margin-bottom: ${props => props.theme.space[props.marginBottom]};
    `,
    bottom: css`
        top: 100%;
        margin-top: ${props => props.theme.space[props.marginTop]};
    `,
};

const popinAlign = {
    topLeft: css`
        ${horizontalAlign.left};
        ${verticalAlign.top};
    `,
    topCenter: css`
        ${horizontalAlign.center};
        ${verticalAlign.top};
    `,
    topRight: css`
        ${horizontalAlign.right};
        ${verticalAlign.top};
    `,
    bottomLeft: css`
        ${horizontalAlign.left};
        ${verticalAlign.bottom};
    `,
    bottomCenter: css`
        ${horizontalAlign.center};
        ${verticalAlign.bottom};
    `,
    bottomRight: css`
        ${horizontalAlign.right};
        ${verticalAlign.bottom};
    `,
};

export { activeStyle, hiddenStyle, popinAlign };
