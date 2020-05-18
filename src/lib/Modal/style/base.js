import { css } from 'styled-components';

const isCloseStyle = css`
    opacity: 0;
    transition: opacity ${props => props.theme.transition.sm};
    transform: scale(0);
`;

export { isCloseStyle };
