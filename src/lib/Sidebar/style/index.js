import styled from 'styled-components';
import { sidebarStyle } from './base';
import { TopbarBase } from '../../Topbar/style';
import { LogoBase } from '../../Logo/style';

const SidebarBase = styled.nav`
    ${sidebarStyle};
    .topbar-nav,
    .logo-nav {
        width: 100%;
    }

    .topbar-nav {
        ${TopbarBase};
    }
    .logo-nav {
        display: none;
    }

    @media (${props => props.theme.query.min.md}) {
        .topbar-nav {
            display: none;
        }
        .logo-nav {
            display: block;
            ${LogoBase};
            padding: ${props => props.theme.space.sm};
        }
    }
`;

export { SidebarBase };
