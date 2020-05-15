import { css } from 'styled-components';

const activeStyle = css`
    opacity: 1;
    transition-delay: 0s, ${props => props.theme.transition.xs};
`;

const hiddenStyle = css`
    opacity: 0;
`;

export { activeStyle, hiddenStyle };
