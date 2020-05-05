import styled from 'styled-components';
import { sidebarStyle } from './base';
import { TopbarBase } from '../../Topbar/style';
import { LogoBase } from '../../Logo/style';

const SidebarBase = styled.nav`
    ${sidebarStyle};

    @media (${props => props.theme.query.max.md}) {
        .topbar-nav {
            ${TopbarBase};
        }
        .logo-nav {
            display: none;
        }
    }

    @media (${props => props.theme.query.min.md}) {
        .topbar-nav {
            display: none;
        }
        .logo-nav {
            ${LogoBase};
            padding: ${props => props.theme.space.sm};
        }
    }
`;

export { SidebarBase };
