import { css } from 'styled-components';
import { SidebarListBase } from '../../SidebarList/style';

const isClosedStyle = css`
    ${SidebarListBase} {
        overflow: hidden;
        height: 0;
        li {
            margin: -${props => props.theme.font.size.base} 0;
            transition: all ${props => props.theme.transition.xs};
        }
    }
`;

const isOpenStyle = css`
    ${SidebarListBase} {
        overflow: hidden;
        height: auto;
        li {
            transition: all ${props => props.theme.transition.xs};
        }
    }
`;

export { isClosedStyle, isOpenStyle };
