import { css } from 'styled-components';

const line = 3;
const rotate = '40deg';

const sideStyle = {
    left: css`
        transform-origin: center right;
    `,
    right: css`
        margin-left: auto;
        transform-origin: center left;
    `,
};

const sideOpenStyle = {
    left: css`
        &:first-of-type {
            transform: rotate(-${rotate}) translateY(-${line * 2}px);
        }

        &:last-of-type {
            transform: rotate(${rotate}) translateY(${line * 2}px);
        }
    `,
    right: css`
        &:first-of-type {
            transform: rotate(${rotate}) translateY(-${line * 2}px);
        }

        &:last-of-type {
            transform: rotate(-${rotate}) translateY(${line * 2}px);
        }
    `,
};

const isOpenStyle = css`
    span {
        width: 75%;

        &:nth-of-type(2) {
            width: 0;
        }

        ${props => sideOpenStyle[props.arrowDirection]};
    }
`;

const isClosedStyle = css`
    span {
        width: 100%;
    }
`;

export { line, sideStyle, isClosedStyle, isOpenStyle };
