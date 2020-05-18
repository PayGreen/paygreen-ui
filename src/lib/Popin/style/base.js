import { css } from 'styled-components';

const activeStyle = css`
    transition-delay: 0s
`;

const hiddenStyle = css`
    opacity: 0;
    transform: scale(0);
    transition-delay: 0s, ${props => props.theme.transition.xs};
`;

export { activeStyle, hiddenStyle };
