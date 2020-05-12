import styled from 'styled-components';
import { transparentize } from 'polished';
import { menuBlock } from '../../MenuPrimary/style/base';
import { closedStyle } from './base';
import { MenuBase } from '../../Menu/style';
import { MenuCloseBase } from '../../MenuClose/style';

const MenuSecondaryBase = styled.div`
    ${menuBlock};

    ul {
        margin: 0;
        padding: ${props => props.theme.space.sm} 0;

        @media (${props => props.theme.query.min.lg}) {
            display: flex;
            padding: 0;
        }

        li {
            list-style-type: none;
            margin: 0;
            padding: 0;

            @media (${props => props.theme.query.min.lg}) {
                display: flex;
                align-items: center;
            }
        }
    }

    @media (${props => props.theme.query.max.lg}) {
        max-height: calc(100vh - ${props => props.theme.grid.header});
        box-shadow: 0 3px 20px ${props => transparentize(
            props.theme.shadow.opacity.sm,
            props.theme.wab.black00
        )};
        
        ${props => props.isOpen ? null : closedStyle};

        ${MenuCloseBase} {
            margin: ${props => props.theme.space.md} auto 0 auto;
        }
    }

    @media (${props => props.theme.query.min.lg}) {
        ${MenuBase} {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0;
        }

        ${MenuCloseBase} {
            display: none;
        }
    }
`;

export { MenuSecondaryBase };