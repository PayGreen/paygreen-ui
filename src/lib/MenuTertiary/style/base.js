import { css } from 'styled-components';

const fixedStyle = css`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: ${props => props.theme.zindex.menu};
`;

export { fixedStyle };
