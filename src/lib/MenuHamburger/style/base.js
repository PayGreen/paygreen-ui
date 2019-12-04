import { css }  from 'styled-components';

const line = 3;

const isClosedStyle = css`
    span {
        width: 100%;
    }
`;

const isOpenStyle = css`
    span {
        width: 75%;

        &:first-of-type {
            transform: rotate(-40deg) translateY(-${line * 2}px);
        }

        &:nth-of-type(2) {
            width: 0;
        }

        &:last-of-type {
            transform: rotate(40deg) translateY(${line * 2}px);
        }
    }
`;

export {
    line,
    isClosedStyle,
    isOpenStyle
};