import styled from 'styled-components';

const SidebarMenuBase = styled.div`
    margin: 0;
    padding: ${props => props.theme.space.xs} 0;
    list-style-type: none; 

    a {
        display: block;
    }
`;

export { SidebarMenuBase };
