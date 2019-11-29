import styled from 'styled-components';

const MenuListBase = styled.ul`
    margin: 0;
    padding: ${props => props.theme.space.sm} 0;
    border-top: solid ${props => props.theme.line} ${props => props.theme.wab.white20};

    li {
        list-style-type: none;
        margin: ${props => props.theme.line} 0;
        padding: 0;
    }
`;

export { MenuListBase };