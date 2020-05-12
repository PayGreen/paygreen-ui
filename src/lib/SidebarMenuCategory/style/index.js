import styled from 'styled-components';
import { hasTitleStyle, noTitleStyle } from './base';
import { TitleBase } from '../../Title/style'

const SidebarMenuCategoryBase = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: ${props => props.theme.space.md} 0;
    
    ${TitleBase} {
        margin-left:${props => props.theme.space.sm};
        margin-bottom:${props => props.theme.space.sm};
    }

    ${props => (props.CategoryTitle ? hasTitleStyle : noTitleStyle)};
`;

export { SidebarMenuCategoryBase };
