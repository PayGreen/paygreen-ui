import styled from 'styled-components';
import { closedStyle } from './base';
import { MenuBase } from '../../Menu/style';
import { MenuItemBase } from '../../MenuItem/style';

const MenuPrimaryBase = styled.ul`
    z-index: ${props => props.theme.zindex.header};
    box-sizing: border-box;
    margin: 0;
    transition: all ${props => props.theme.transition.md};    

    @media (${props => props.theme.query.max.lg}) {
        position: fixed;
        width: 100%;
        height: 100vh;
        overflow: auto;
        background-color: ${props => props.theme.wab.white00};
        padding: ${props => props.theme.space.sm} 0;
        
        ${props => props.isOpen ? null : closedStyle};
    }

    @media (${props => props.theme.query.min.lg}) {
        position: relative;
        display: flex;
        padding: 0;

        ${MenuBase} {
            margin-left: ${props => props.theme.space.md};
            margin-right: ${props => props.theme.space.md};

            &:first-of-type {
                margin-left: 0;
            }

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
`;

export { MenuPrimaryBase };