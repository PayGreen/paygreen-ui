import styled from 'styled-components';

const SidebarMenuBase = styled.div`
    margin: 0;
    padding: ${props => props.theme.space.sm} 0;
    display: flex;
    flex-direction: column;
`;

export { SidebarMenuBase };
