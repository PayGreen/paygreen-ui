import { css } from 'styled-components';
import { MenuPrimaryBase } from '../../MenuPrimary/style';
import { MenuSecondaryBase } from '../../MenuSecondary/style';
import { MenuBase } from '../../Menu/style';
import { MenuItemBase } from '../../MenuItem/style';
import { LinkBase } from '../../Link/style';
import { DotBase } from '../../Dot/style';
import { LogoBase } from '../../Logo/style';

const hiddenStyle = css`
    margin-top: -${props => props.theme.grid.header};
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

    ${MenuPrimaryBase},
    ${MenuSecondaryBase} {
        ${MenuBase} {
            & > ${MenuItemBase},
            & > a ${MenuItemBase} {
                &::after {
                    background-image: none;
                    background-color: ${props => props.theme.wab.white00};
                    opacity: 0.5;
                }

                ${LinkBase} {
                    color: ${props => props.theme.wab.white00};
                }
            }
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

    & > ${DotBase} {
        background-color: ${props => props.theme.wab.white00};
        opacity: 0.5;
    }
`;

export { headerStyle, hiddenStyle, topStyle };
