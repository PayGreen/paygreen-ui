import styled from 'styled-components';
import { menuBlock, closedStyle } from './base';
import { MenuBase } from '../../Menu/style';

const MenuPrimaryBase = styled.ul`
    ${menuBlock};

    @media (${props => props.theme.query.max.lg}) {
        height: calc(100vh - ${props => props.theme.grid.header});
        padding: ${props => props.theme.space.sm} 0;
        
        ${props => props.isOpen ? null : closedStyle};
    }

    @media (${props => props.theme.query.min.lg}) {
        ${MenuBase} {
            &:hover {
                /* Let MenuList open when cursor is between MenuItem and MenuList */
                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: ${props => props.theme.iconSize.lg};
                    bottom: 0;
                    transform: translateY(100%);
                    z-index: ${props => props.theme.zindex.menu};
                }
            }
        }
    }
`;

export { MenuPrimaryBase };