import styled from 'styled-components';
import { fixedStyle } from './base';

const MenuTertiaryBase = styled.div`
    ${props => props.isFixed ? fixedStyle : null};

    a {
        &.active {
            font-weight: ${props => props.theme.font.weight.bold};
        }
    }
`;

export { MenuTertiaryBase };
