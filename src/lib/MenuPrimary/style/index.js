import styled from 'styled-components';
import { menuBlock, closedStyle } from './base';

const MenuPrimaryBase = styled.ul`
    ${menuBlock};

    @media (${props => props.theme.query.max.lg}) {
        height: calc(100vh - ${props => props.theme.grid.header});
        padding: ${props => props.theme.space.sm} 0;
        
        ${props => props.isOpen ? null : closedStyle};
    }
`;

export { MenuPrimaryBase };