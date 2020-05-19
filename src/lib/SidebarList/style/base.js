import { css } from 'styled-components';

const isClosedStyle = css`
    transform: scaleY(0);
    transition: transform ${props => props.theme.transition.sm} ease
        ${props => props.theme.transition.xs};
    li {
        transition: opacity ${props => props.theme.transition.sm};
        opacity: 0;
    }
`;

const isOpenStyle = css`
    transform: scaleY(1);
    transition: transform ${props => props.theme.transition.sm};

    li {
        transition: opacity ${props => props.theme.transition.sm} ease
            ${props => props.theme.transition.xs};
    }
`;

export { isClosedStyle, isOpenStyle };
