import styled from 'styled-components';
import { Box } from '../../Main/style';
import { TopbarBase } from '../../Topbar/style';

const SidebarBase = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    overflow-y: hidden;

    @media (${props => props.theme.query.max.md}) {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-areas: 'topbar' 'box';

        & > ${TopbarBase} {
            grid-area: topbar;
        }

        & > ${Box} {
            grid-area: box;
            overflow-y: auto;
        }
    }

    @media (${props => props.theme.query.min.md}) {
        width: ${props => props.theme.grid.sidebar};
        overflow-y: auto;
    }
`;

export { SidebarBase };
