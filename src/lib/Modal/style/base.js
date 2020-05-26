import { css } from 'styled-components';

const isCloseStyle = css`
    opacity: 0;
    transform: scale(0);
    transition-delay: 0s, ${props => props.theme.transition.sm};
`;

const isOpenStyle = css`
    transition-delay: ${props => props.theme.transition.xs}, 0s;
`;

export { isOpenStyle, isCloseStyle };
