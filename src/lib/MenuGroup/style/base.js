import { css } from 'styled-components';
import { MenuSecondaryBase } from '../../MenuSecondary/style';
import { MenuListBase } from '../../MenuList/style';
import { MenuItemBase } from '../../MenuItem/style';
import { DotBase } from '../../Dot/style';

const hiddenStyle = css`
    margin-top: -${props => props.theme.grid.header};
    box-shadow: ${props => props.theme.shadow.size.lg} transparent;

    @media ${props => props.theme.screen.min.lg} {
        ${MenuListBase} {
            display: none;
        }
    }
`;

const topStyle = css`
    background-color: transparent;
    border-color: transparent;
    box-shadow: ${props => props.theme.shadow.size.lg} transparent;
    height: ${props => props.theme.grid.headerBig};

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

export { hiddenStyle, topStyle };
