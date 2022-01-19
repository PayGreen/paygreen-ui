import styled from 'styled-components';
import { isClosedStyle, isOpenStyle } from './base';

const SidebarListBase = styled.ul`
    margin: 0;
    padding: 0;
    transition-property: all, height;
    transition-duration: ${props => props.theme.transition.xs};
    list-style-type: none;

    li {
        margin: 0;
        padding: 0;
    }

    ${props => (props.isOpen ? isOpenStyle : isClosedStyle)};
`;

export { SidebarListBase };
