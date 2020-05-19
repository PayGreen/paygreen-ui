import styled from 'styled-components';
import { isClosedStyle, isOpenStyle } from './base';


const SidebarListBase = styled.ul`
    margin: 0;
    padding: 0;
    li {
        list-style-type: none;
        margin: ${props => props.theme.line} 0;
        padding: 0;
    }

    ${props => (props.isOpen ? isOpenStyle : isClosedStyle)};

`;

export { SidebarListBase };
