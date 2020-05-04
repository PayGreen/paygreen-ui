import { css } from 'styled-components';

const sidebarStyle = css`
    position: relative;
    z-index: ${props => props.theme.zindex.menu};
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export { sidebarStyle };
