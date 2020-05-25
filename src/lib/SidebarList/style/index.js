import styled from 'styled-components';
import { isClosedStyle, isOpenStyle } from './base';

const SidebarListBase = styled.ul`
    margin: 0;
    padding: 0;
    transition-property: all, height;
    transition-duration: ${props => props.theme.transition.xs};

    ul {
        list-style-type: none;
        padding: 0;
    }

    ${props => (props.isOpen ? isOpenStyle : isClosedStyle)};
`;

export { SidebarListBase };
