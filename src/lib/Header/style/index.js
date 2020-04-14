import styled from 'styled-components';
import { headerStyle } from './base';
import { MenuPrimaryBase } from '../../MenuPrimary/style';
import { MenuSecondaryBase } from '../../MenuSecondary/style';
import { MenuHamburgerBase } from '../../MenuHamburger/style';
import { LogoBase } from '../../Logo/style';

const HeaderBase = styled.header`
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

        ${MenuSecondaryBase} {
            margin-left: ${props => props.theme.space.lg};
            padding-left: ${props => props.theme.space.lg};

            &::before {
                content: '';
                position: absolute;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 0;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: ${props => props.theme.wab.grey10};
            }
        }
    }
`;

export { HeaderBase };