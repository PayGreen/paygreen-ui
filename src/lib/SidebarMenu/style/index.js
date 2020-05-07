import styled from 'styled-components';

const SidebarMenuBase = styled.ul`
    box-sizing: border-box;
    margin: 0;
    padding: ${props => props.theme.space.sm} 0;
    list-style-type: none;
    position: relative;
`;

export { SidebarMenuBase };