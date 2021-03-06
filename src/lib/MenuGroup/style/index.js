import styled from 'styled-components';
import { MenuPrimaryBase } from '../../MenuPrimary/style';
import { MenuHamburgerBase } from '../../MenuHamburger/style';
import { LogoBase } from '../../Logo/style';
import { headerStyle, hiddenStyle, topStyle } from './base';

const MenuGroupBase = styled.div`
    .main-nav {
        a {
            display: block;
            height: 100%;
        }
    }

    @media ${props => props.theme.screen.max.lg} {
        .main-nav {
            ${headerStyle};
            ${props =>
                props.isHidden && !props.hasOpenMenu ? hiddenStyle : null};
        }

        ${LogoBase} {
            padding: 0 !important;
        }
    }

    @media ${props => props.theme.screen.min.lg} {
        ${headerStyle};
        ${props => (props.isHidden ? hiddenStyle : null)};
        ${props => (props.hasTopStyle ? topStyle : null)};

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
