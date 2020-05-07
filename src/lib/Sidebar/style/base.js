import { css } from 'styled-components';

const sidebarStyle = css`
    position: absolute;
    z-index: ${props => props.theme.zindex.menu};
    height: 100vh;
    width: 100%;

    @media (${props => props.theme.query.min.md}) {
        width: ${props => props.theme.grid.sidebar};
    }
    
    transition: all ${props => props.theme.transition.sm};
`;

export { sidebarStyle };
