import { css } from 'styled-components';

const activeStyle = css`
    transition-delay: 0s;
`;

const hiddenStyle = css`
    opacity: 0;
    transform: scale(0);
    transition-delay: 0s, ${props => props.theme.transition.xs};
`;

const popinAlign = {
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

export { activeStyle, hiddenStyle, popinAlign };
