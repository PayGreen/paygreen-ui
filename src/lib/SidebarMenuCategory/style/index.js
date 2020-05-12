import styled from 'styled-components';
import { SidebarItemBase } from '../../SidebarItem/style';
import { SidebarListBase } from '../../SidebarList/style';
import { isClosedStyle, isOpenStyle } from './base';

const SidebarMenuBase = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: ${props => props.theme.space.sm} 0;
    position: relative;

    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: auto auto;
    grid-template-areas:
        'item arrow'
        'list list';

    ${SidebarItemBase} {
        grid-area: item;
    }

    ${SidebarListBase} {
        grid-area: list;
    }

    & > button {
        grid-area: arrow;
    }

    & > .icon {
        margin: auto;
    }

    ${props => (props.isOpen ? isOpenStyle : isClosedStyle)};
`;

export { SidebarMenuBase };
