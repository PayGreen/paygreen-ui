import styled from 'styled-components';
import { TitleBase } from '../../Title/style';

const SidebarMenuCategoryBase = styled.div`
    padding: ${props => props.theme.space.md} 0;

    ${TitleBase} {
        margin-bottom: ${props => props.theme.space.md};
        padding-left: ${props => props.theme.space[props.paddingLateral]};
    }
`;

export { SidebarMenuCategoryBase };
