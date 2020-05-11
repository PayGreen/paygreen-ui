import { css } from 'styled-components';
import { SidebarListBase } from '../../SidebarList/style';

const isClosedStyle = css`
    ${SidebarListBase} {
        display: none;
    }
`;

const isOpenStyle = css`
    ${SidebarListBase} {
        display: block;
    }
`;

export { isClosedStyle, isOpenStyle };
