import styled from 'styled-components';
import { MenuHamburgerBase } from '../../MenuHamburger/style';
import { LogoBase } from '../../Logo/style';
import { hiddenStyle, notTopStyle } from './base';

const MenuMobileBase = styled.div`
    @media ${props => props.theme.screen.max.lg} {
        position: relative;
        z-index: ${props => props.theme.zindex.header};
        height: ${props => props.theme.grid.header};
        padding: ${props => props.theme.space.sm};
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: ${props => props.theme.line} solid transparent;
        box-shadow: ${props => props.theme.shadow.size.lg} transparent;
        transition: all ${props => props.theme.transition.sm};

        ${props => (props.hasTopStyle ? null : notTopStyle)};
        ${props => (props.isHidden ? hiddenStyle : null)};

        ${LogoBase} {
            padding: 0 !important;

            .logo {
                width: ${props => props.theme.logoWidth.sm};
            }

            .baseline {
                display: none;
            }
        }
    }

    @media ${props => props.theme.screen.min.lg} {
        ${MenuHamburgerBase},
        button.icon {
            display: none;
        }
    }
`;

export { MenuMobileBase };
