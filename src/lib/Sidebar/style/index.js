import styled from 'styled-components';
import { sidebarStyle } from './base';
import { TopbarBase } from '../../Topbar/style';
import { LogoBase } from '../../Logo/style';

const SidebarBase = styled.nav`
    .topbar-nav,
    .logo-nav {
        width: 100%;
    }

    @media (${props => props.theme.query.max.md}) {
        .topbar-nav {
            ${TopbarBase};
        }
        .logo-nav {
            display: none;
        }
        ${sidebarStyle};
    }

    @media (${props => props.theme.query.min.md}) {
        .topbar-nav {
            display: none;
        }
        .logo-nav {
            ${LogoBase};
            padding: ${props => props.theme.space.sm};
        }
        ${sidebarStyle};
    }
`;

export { SidebarBase };
