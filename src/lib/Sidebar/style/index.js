import styled from 'styled-components';
import { Box } from '../../Main/style';
import { TopbarBase } from '../../Topbar/style';

const SidebarBase = styled.div`
    position: absolute;
    z-index: ${props => props.theme.zindex.menu};
    height: 100vh;
    width: 100%;
    overflow-y: auto;

    @media (${props => props.theme.query.min.md}) {
        width: ${props => props.theme.grid.sidebar};
    }
`;

const MainSidebar = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow-y: hidden;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'topbar' 'box';

    & > ${TopbarBase} {
        grid-area: topbar;
    }

    & > ${Box} {
        grid-area: box;
    }
`;

export { MainSidebar, SidebarBase };
