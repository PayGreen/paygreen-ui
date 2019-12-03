import styled from 'styled-components';
import { menuBlock } from '../../MenuPrimary/style/base';
import { closedStyle } from './base';

const MenuSecondaryBase = styled.ul`
    ${menuBlock};

    @media (${props => props.theme.query.max.lg}) {
        max-height: calc(100vh - ${props => props.theme.grid.header});
        padding: ${props => props.theme.space.sm} 0;
        
        ${props => props.isOpen ? null : closedStyle};
    }

    @media (${props => props.theme.query.min.lg}) {
        
    }
`;

export { MenuSecondaryBase };