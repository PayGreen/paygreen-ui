import styled from 'styled-components';
import { transparentize } from 'polished';
import { menuBlock } from '../../MenuPrimary/style/base';
import { closedStyle } from './base';
import { LinkBase } from '../../Link/style';
import { MenuListBase } from '../../MenuList/style';
import { MenuBase } from '../../Menu/style';
import { MenuCloseBase } from '../../MenuClose/style';

const MenuSecondaryBase = styled.div`
    ${menuBlock};

    @media ${props => props.theme.screen.max.lg} {
        max-height: calc(100vh - ${props => props.theme.grid.header});
        box-shadow: 0 3px 20px
            ${props =>
                transparentize(
                    props.theme.shadow.opacity.sm,
                    props.theme.wab.black00,
                )};

        ${props => (props.isOpen ? null : closedStyle)};
    }

    .menu {
        margin: 0;
        padding: ${props => props.theme.space.sm} 0;

        @media ${props => props.theme.screen.min.lg} {
            display: flex;
            padding: 0;
        }

        .menuElement {
            list-style-type: none;
            margin: 0;
            padding: 0;

            @media ${props => props.theme.screen.min.lg} {
                display: flex;
                align-items: center;
            }

            & > ${MenuBase} {
                @media ${props => props.theme.screen.min.lg} {
                    position: relative;
                    display: flex;
                    align-items: center;
                    padding: 0;
                }
            }
        }
    }

    ${MenuCloseBase} {
        margin: ${props => props.theme.space.md} auto 0 auto;

        @media ${props => props.theme.screen.min.lg} {
            display: none;
        }
    }

    ${MenuListBase} {
        @media ${props => props.theme.screen.min.lg} {
            width: auto;
            min-width: 100%;
        }

        ${LinkBase} {
            @media ${props => props.theme.screen.min.lg} {
                white-space: nowrap;
            }
        }
    }
`;

export { MenuSecondaryBase };
