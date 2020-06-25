import styled from 'styled-components';

const MenuTertiaryBase = styled.div`
    a {
        &.active {
            font-weight: ${props => props.theme.font.weight.bold};
        }
    }
`;

export { MenuTertiaryBase };
