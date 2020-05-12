import styled from 'styled-components';

const SidebarListBase = styled.ul`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    li {
        list-style-type: none;
        margin: ${props => props.theme.line} 0;
        padding: 0;
    }
`;

export { SidebarListBase };
