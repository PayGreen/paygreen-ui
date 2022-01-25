import { css } from 'styled-components';

const hiddenStyle = css`
    margin-top: -${props => props.theme.grid.header};
    opacity: 0;
`;

const fixedStyle = css`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
`;

export { hiddenStyle, fixedStyle };
