import styled from 'styled-components';
import { TitleBase } from '../../Title/style'
import { SidebarMenuBase } from '../../SidebarMenu/style'

const SidebarMenuCategoryBase = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: ${props => props.theme.space.md} 0;
    
    ${TitleBase} {
        margin-left:${props => props.theme.space.sm};
        margin-bottom:${props => props.theme.space.md};
    }

    ${SidebarMenuBase} {
        padding:0;
    }
`;

export { SidebarMenuCategoryBase };
