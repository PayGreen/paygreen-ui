import styled from 'styled-components';
import { headerStyle } from './base';
import { MenuPrimaryBase } from '../../MenuPrimary/style';
import { MenuHamburgerBase } from '../../MenuHamburger/style';
import { LogoBase } from '../../Logo/style';

const MenuGroupBase = styled.div`
    .main-nav {
        a {
            display: block;
            height: 100%;
        }
    }

    @media (${props => props.theme.query.max.lg}) {
        .main-nav {
            ${headerStyle};
        }

        ${LogoBase} {
            padding: 0 !important;
        }
    }

    @media (${props => props.theme.query.min.lg}) {
        ${headerStyle};

        ${MenuHamburgerBase},
        button.icon {
            display: none;
        }

        ${MenuPrimaryBase} {
            flex: 1;
            justify-content: flex-end;
        }
    }
`;

export { MenuGroupBase };
