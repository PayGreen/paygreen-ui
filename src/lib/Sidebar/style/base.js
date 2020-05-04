import { css } from 'styled-components';

const sidebarStyle = css`
    position: relative;
    z-index: ${props => props.theme.zindex.menu};
    height:100vh;
    background-color:red;
    transition: all ${props => props.theme.transition.sm};
    @media (${props => props.theme.query.min.md}) {
        width: ${props => props.theme.grid.sidebar};
    }
    @media (${props => props.theme.query.max.md}) {
        width: 100%;
    }
`;

export { sidebarStyle };
