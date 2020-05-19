import styled from 'styled-components';

const SidebarMenuBase = styled.div`
    margin: 0;
    padding: ${props => props.theme.space.sm} 0;
    display: flex;
    flex-direction: column;
    width:380px;
    overflow:hidden;
    background-color:lightgray;
`;

export { SidebarMenuBase };
