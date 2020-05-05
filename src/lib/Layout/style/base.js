import { css } from 'styled-components';

const layoutStyle = css`
    position: relative;
    background: url(${props => props.theme.pattern}) repeat;
    z-index: ${props => props.theme.zindex.content};
    height: 100vh;
    width:100%;
`;

export { layoutStyle };
