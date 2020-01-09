import { css } from 'styled-components';

const hoverStyle = css`
    a:hover &,
    a:active &,
    a:focus & {
        &::after {
            height: 100%;
        }
    }
`;

export {
    hoverStyle,
};