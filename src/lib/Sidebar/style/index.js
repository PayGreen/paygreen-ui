import styled from 'styled-components';
import { sidebarStyle } from './base';
import { LogoBase } from '../../Logo/style';

const SidebarBase = styled.header`
    .main-nav {
        a {
            display: block;
            height: 100%;
        }
    }

    @media (${props => props.theme.query.max.md}) {
        .main-nav {
            ${sidebarStyle};
        }

        ${LogoBase} {
            padding: 0 !important;
        }
    }

    @media (${props => props.theme.query.min.md}) {
        .main-nav {
            ${sidebarStyle};
        }

        ${LogoBase} {
            display: none;
        }
    }
`;

export { SidebarBase };
