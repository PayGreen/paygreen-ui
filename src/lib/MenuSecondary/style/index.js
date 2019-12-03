import styled from 'styled-components';
import { transparentize } from 'polished';
import { menuBlock } from '../../MenuPrimary/style/base';
import { closedStyle } from './base';

const MenuSecondaryBase = styled.ul`
    ${menuBlock};

    @media (${props => props.theme.query.max.lg}) {
        max-height: calc(100vh - ${props => props.theme.grid.header});
        padding: ${props => props.theme.space.sm} 0;
        box-shadow: 0 3px 20px ${props => transparentize(
            props.theme.shadow.opacity.sm,
            props.theme.wab.black00
        )};
        
        ${props => props.isOpen ? null : closedStyle};
    }

    @media (${props => props.theme.query.min.lg}) {

    }
`;

export { MenuSecondaryBase };