import { css } from 'styled-components';

const isClosedStyle = css`
    opacity: 0;
    transform: scaleY(0);
    transition-delay: 0s, ${props => props.theme.transition.xs};
`;

const isOpenStyle = css`
    transition-delay: ${props => props.theme.transition.xs}, 0s;
`;

export { isClosedStyle, isOpenStyle };
