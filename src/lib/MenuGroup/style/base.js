import { css } from 'styled-components';
import { MenuSecondaryBase } from '../../MenuSecondary/style';
import { MenuListBase } from '../../MenuList/style';
import { MenuItemBase } from '../../MenuItem/style';
import { DotBase } from '../../Dot/style';
import { LogoBase } from '../../Logo/style';

const hiddenStyle = css`
    margin-top: -${props => props.theme.grid.header};

    @media ${props => props.theme.screen.min.lg} {
        ${MenuListBase} {
            display: none;
        }
    }
`;

const headerStyle = css`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    height: ${props => props.theme.grid.header};
    padding: ${props => props.theme.space.sm};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid
        ${props => props.theme.line + ' ' + props.theme.wab.white20};
    background-color: ${props => props.theme.wab.white00};
    transition: all ${props => props.theme.transition.sm};
`;

const topStyle = css`
    background-color: transparent;
    border-bottom: none;
    height: ${props => props.theme.grid.headerBig};

    ${LogoBase} {
        svg {
            fill: ${props => props.theme.wab.white00};
        }

        .baseline {
            display: block;
        }

        .logo {
            width: ${props => props.theme.logoWidth.md};
        }
    }

    ${MenuItemBase} {
        color: ${props => props.theme.wab.white00};

        &::after {
            background-image: none;
            background-color: ${props => props.theme.wab.white00};
            opacity: 0.5;
        }
    }

    ${MenuSecondaryBase} {
        ${DotBase} {
            &::before,
            &::after {
                background-color: ${props => props.theme.wab.white00};
                opacity: 0.5;
            }
        }
    }
`;

export { headerStyle, hiddenStyle, topStyle };
